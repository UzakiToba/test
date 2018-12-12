import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

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
  public render() {
    return (
      <div>
        <span>{this.props.store.common.test}</span>
        <button onClick={this.click}>ボタン</button>
      </div>
    );
  }
  private click() {
    this.props.dispatch(testAction('hugahuga'));
  }
}

const mapStateToProps = (state: IStore) => ({ store: state });

const mapDispathToProps = (dispatch: Dispatch) => ({ dispatch });

const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge =>
  Object.assign({}, store, dispatch, ownProps);

export default connect(
  mapStateToProps,
  mapDispathToProps,
  mergeProps
)(Test);
