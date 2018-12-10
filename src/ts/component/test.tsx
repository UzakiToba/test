import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// action
import { testAction } from '../redux/common/actions';

// interface
import { IStore } from '../redux/';

interface IProps {}
interface IMerge extends IProps {
  store: IStore;
  dispatch: Dispatch;
}

class Test extends React.Component<IMerge, {}> {
  constructor(props: IMerge) {
    super(props);
    this.click = this.click.bind(this);
  }
  private click() {
    this.props.dispatch(testAction('hugahuga'));
  }
  render() {
    return (
      <div>
        <span>{this.props.store.common.test}</span>
        <button onClick={this.click}>ボタン</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ store: state });

const mapDispathToProps = dispatch => ({ dispatch });

const mergeProps = (store, dispatch, ownProps: IProps): IMerge =>
  Object.assign({}, store, dispatch, ownProps);

export default connect(
  mapStateToProps,
  mapDispathToProps,
  mergeProps
)(Test);
