import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Component
import Header from '../Header/';
import Footer from '../Footer/';

import { IStore, IRouter } from '../../../redux/';
interface IProps {}
interface IMerge extends IProps {
  store: IRouter;
  dispatch: Dispatch;
}
interface IState {}

class Wrapper extends React.Component<IMerge, IState> {
  constructor(props: IMerge) {
    super(props);
  }
  public shouldComponentUpdate(nextProps: IMerge, nextState: IState): boolean {
    // urlの変更検出
    return (
      nextProps.store.router.location.pathname !==
      this.props.store.router.location.pathname
    );
  }
  // URLからページ用クラス生成
  private generateClass() {
    const path = this.props.store.router.location.pathname;
    let rePath = '_index';
    if (path !== '/') rePath = path.replace(/\//g, '_');
    return rePath;
  }
  render() {
    return (
      <div className={`l_wrapper ${this.generateClass()}`}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  store: {
    router: state.router
  }
});
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });
const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge =>
  Object.assign({}, store, dispatch, ownProps);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Wrapper);
