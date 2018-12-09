import 'babel-polyfill';

// react
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';

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
