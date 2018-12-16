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
import { store, history } from './store';
import rootReducer from './redux/';

// component
import Entry from './component/Entry';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Entry history={history} />
    </Provider>,
    document.getElementById('app')
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./component/Entry', () => {
    render();
  });
  // Reload reducers
  module.hot.accept('./redux/index', () => {
    store.replaceReducer(rootReducer(history));
  });
}
