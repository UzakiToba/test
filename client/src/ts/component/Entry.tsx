import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

// fs
import GetWindowSize from '../../../../asset/fn/GetWindowSize';
import GetWindowSizeDevice from '../../../../asset/fn/GetWindowSizeDevice';

// action
import { setSiteState } from '../redux/window/actions';

// componsnt
import router from '../Router/';

// interface
import { IStore, ICommon, IWindow } from '../redux';
type IStoreCommon = IWindow & ICommon;
interface IProps {
  history: History;
}
interface IMerge extends IProps {
  store: IStoreCommon;
  dispatch: Dispatch;
}

export class Entry extends React.Component<IMerge, {}> {
  private timeout: any;
  constructor(props: IMerge) {
    super(props);
    console.log(props);
    this.timeout = false;
    this.windowDimensions = this.windowDimensions.bind(this);
  }
  public componentDidMount() {
    window.addEventListener('resize', this.windowDimensions);
  }
  public componentWillUnmount() {
    window.removeEventListener('resize', this.windowDimensions);
  }
  // resizeをReduxで管理
  private windowDimensions() {
    const storeWindowSize = this.props.store.window.toJS();
    const { w, h } = GetWindowSize();
    const screen = GetWindowSizeDevice(w);
    if (!this.timeout) {
      this.timeout = true;
      setTimeout(() => {
        this.timeout = false;
      }, 500);
      if (screen !== storeWindowSize.screenType) {
        this.props.dispatch(setSiteState({ w, h, type: screen }));
      } else {
        this.props.dispatch(setSiteState({ w, h }));
      }
    }
  }
  render() {
    console.log('render');
    return (
      <ConnectedRouter history={this.props.history}>{router}</ConnectedRouter>
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

const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge => {
  console.log(ownProps);
  return Object.assign({}, store, dispatch, ownProps);
};
const option = { areStatePropsEqual: () => false };
export default connect(
  mapStateToProps,
  mapDispathToProps,
  mergeProps,
  option
)(Entry);
