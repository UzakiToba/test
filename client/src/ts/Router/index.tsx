import * as React from 'react';
// router
import { Route, Switch, Redirect } from 'react-router-dom';

// 認証
import Auth from '../Auth/';
// component
import Wrapper from '../component/layout/Wrapper/';

import IndexPage from '../component/pages/IndexPage/';
import Login from '../component/pages/Login/';
import Home from '../component/pages/Home/';
import NoMatch from '../component/pages/NoMatch/';
import NoRegist from '../component/pages/NoRegist/';

function huga() {
  return <div>huga</div>;
}

class Router extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.noMatch = this.noMatch.bind(this);
  }
  private noMatch() {
    return <Redirect to="/404" />;
  }
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/404" component={NoMatch} />
            <Route exact path="/403" component={NoRegist} />
            <Auth>
              {/* 認証済みのみOK */}
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route render={this.noMatch} />
              </Switch>
            </Auth>
          </Switch>
        </Wrapper>
      </React.Fragment>
    );
  }
}

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
