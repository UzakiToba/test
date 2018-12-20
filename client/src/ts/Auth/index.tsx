import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// component
import NoMatch from '../component/pages/NoMatch/';

import { IStore, IUser, IRouter } from '../redux/';
interface IProps {}
interface IMerge extends IProps {
  store: IUser & IRouter;
  dispatch: Dispatch;
}

class Auth extends React.Component<IMerge, {}> {
  private authList: string[];
  constructor(props: IMerge) {
    super(props);
    // loginしないと入れないリスト
    this.authList = (() => {
      const children = this.props.children as any;
      const paths = [];
      for (const obj of children.props.children) {
        const path = obj.props.path;
        if (!!path) paths.push(path);
      }
      return paths;
    })();
    this.noMatch = this.noMatch.bind(this);
  }
  public shouldComponentUpdate(nextProps: IMerge): boolean {
    // tokenとurlが変更したときだけrender動かす
    const next = nextProps.store;
    const prev = this.props.store;
    return (
      next.router.location.pathname !== prev.router.location.pathname ||
      next.user.token !== prev.user.token
    );
  }
  private noMatch() {
    return <Redirect to="/404" />;
  }
  private returnElement() {
    const { router } = this.props.store;
    const { token } = this.props.store.user;
    if (token) {
      // tokenがある場合
      return this.props.children;
    }
    // tokenがなくページ自体が存在している場合
    if (this.authList.some(key => key === router.location.pathname)) {
      return <Redirect to="/403" />;
    }
    // ページが存在していない場合
    return (
      <Switch>
        <Route render={this.noMatch} />
      </Switch>
    );
  }
  render() {
    return <React.Fragment>{this.returnElement()}</React.Fragment>;
  }
}

const mapStateToProps = (state: IStore) => ({
  store: {
    user: state.user,
    router: state.router
  }
});
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });
const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge =>
  Object.assign({}, store, dispatch, ownProps);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  { areStatePropsEqual: () => false }
)(Auth);
