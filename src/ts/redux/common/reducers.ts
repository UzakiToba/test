import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';

export interface ICommon {
  test: string;
}

const initialNormarState: ICommon = {
  test: 'hoge'
};

export default reducerWithInitialState(initialNormarState).case(
  actions.testAction,
  (state, payload) => ({ ...state, test: payload })
);
