import { createStore } from 'redux';
// devTool
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({});

import reducer from './redux/';

export const store = createStore(
  reducer,
  (() => {
    // 開発時だけdevtoolを使用できるようにする
    if (process.env.NODE_ENV === 'development') return composeEnhancers();
  })()
);
