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

// store
import { store, history } from './store';
import rootReducer from './redux/';

// component
import Entry from './Entry';

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
  module.hot.accept('./Entry', () => {
    render();
  });
  // Reload reducers
  module.hot.accept('./redux/', () => {
    store.replaceReducer(rootReducer(history));
  });
}
