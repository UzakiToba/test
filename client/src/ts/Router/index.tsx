import * as React from 'react';
// router
import { Route, Switch } from 'react-router-dom';

// 認証
import Auth from '../Auth/';
// component
import IndexPage from '../component/pages/IndexPage/';
import Login from '../component/pages/Login/';
import Home from '../component/pages/Home/';
import NoMatch from '../component/pages/NoMatch/';
import NoRegist from '../component/pages/NoRegist/';

function huga() {
  return <div>huga</div>;
}

const Router = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/404" component={NoMatch} />
      <Route exact path="/403" component={NoRegist} />
      <Auth>
        {/* 認証済みのみOK */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Auth>
    </Switch>
  </React.Fragment>
);

export default Router;

/*
  Routerでpropsを渡す場合は以下のように書く
  public hoge() {
    return <Hoge hoge="piyo" />;
  }
  public render() {
    ...
    <Route
      exact
      path="/hoge"
      render={ this.hoge }
    />
    ...
  }
*/
