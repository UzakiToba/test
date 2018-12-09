import { combineReducers } from 'redux';

import common from './common/reducers';
import commonModel from './common/model';

// store全体
export interface IStore {
  common: commonModel;
}

export interface ICommon {
  common: commonModel;
}

export default combineReducers({
  common
});
