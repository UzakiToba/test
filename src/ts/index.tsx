import 'babel-polyfill';
// scss
import '../scss/common.scss';

// react
// PWA
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
OfflinePluginRuntime.install();

// hot
import { hot } from 'react-hot-loader';

// store
import { store } from './store';

// component
import Test from './component/test';

const App: React.SFC = () => <Test />;

const render = (Component: React.SFC): void => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app')
  );
};

if (module.hot) {
  render(hot(module)(App));
} else {
  render(App);
}
