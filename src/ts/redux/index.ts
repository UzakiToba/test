import { combineReducers } from 'redux';

import common, { ICommon } from './common/reducers';

export interface IStore {
  common: ICommon;
}

export default combineReducers({
  common
});
