import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// action
import { testAction } from '../redux/common/actions';

// interface
import { IStore, ICommon, IWindow } from '../redux';
type IStoreConnect = ICommon & IWindow;
interface IProps {}
interface IMerge extends IProps {
  store: IStoreConnect;
  dispatch: Dispatch;
}

class Entry extends React.Component<IMerge, {}> {
  constructor(props: IMerge) {
    super(props);
    console.log(props);
  }
  public render() {
    return (
      <div>
        <span>{this.props.store.common.test}</span>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  store: {
    common: state.common,
    window: state.window
  }
});

const mapDispathToProps = (dispatch: Dispatch) => ({ dispatch });

const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge =>
  Object.assign({}, store, dispatch, ownProps);

export default connect(
  mapStateToProps,
  mapDispathToProps,
  mergeProps
)(Entry);
