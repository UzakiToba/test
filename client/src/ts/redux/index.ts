import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';

import commonModel from './common/model';
import common from './common/reducers';

import windowModel from './window/model';
import window from './window/reducers';

import userModel from './user/model';
import user from './user/reducers';

// store全体
export interface IStore {
  common: commonModel;
  window: windowModel;
  router: RouterState;
  user: userModel;
}

export interface ICommon {
  common: commonModel;
}
export interface IWindow {
  window: windowModel;
}
export interface IRouter {
  router: RouterState;
}
export interface IUser {
  user: userModel;
}

const rootReducer = (history: History) =>
  combineReducers({
    common,
    window,
    user,
    router: connectRouter(history)
  });

export default rootReducer;
