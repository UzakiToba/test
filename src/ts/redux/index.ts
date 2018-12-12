import { combineReducers } from 'redux';

import commonModel from './common/model';
import common from './common/reducers';

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
