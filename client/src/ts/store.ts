import { createStore, applyMiddleware, compose } from 'redux';
// devTool
import { composeWithDevTools } from 'redux-devtools-extension';
// const composeEnhancers = composeWithDevTools({});
const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

import rootReducer from './redux/';

export const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware(routerMiddleware(history)))
  // (() => {
  //   // 開発時だけdevtoolを使用できるようにする
  //   if (process.env.NODE_ENV === 'development') return composeEnhancers();
  // })()
);
