import 'babel-polyfill';
// scss
import '../scss/common.scss';

// react
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
// PWA
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

// store
import { store } from './store';

// component
import Test from './component/test';

ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById('app')
);
