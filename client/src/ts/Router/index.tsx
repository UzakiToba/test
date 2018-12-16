import * as React from 'react';
// router
import { Route, Switch } from 'react-router';

// component
import Home from '../component/pages/Home/';

function hoge() {
  return <div>hoge</div>;
}
function huga() {
  return <div>huga</div>;
}

const Router = (
  <React.Fragment>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/login" render={huga} />
      {/*<Route component={NoMatch} />*/}
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
