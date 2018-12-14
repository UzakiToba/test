import { combineReducers } from 'redux';

import commonModel from './common/model';
import common from './common/reducers';

import windowModel from './window/model';
import window from './window/reducers';

// store全体
export interface IStore {
  common: commonModel;
  window: windowModel;
}

export interface ICommon {
  common: commonModel;
}
export interface IWindow {
  window: windowModel;
}

export default combineReducers({
  common,
  window
});
