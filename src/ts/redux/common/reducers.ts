import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';

export interface ITest {
  test: string;
}

const initialNormarState: ITest = {
  test: 'hoge'
};

export default reducerWithInitialState(initialNormarState).case(
  actions.testAction,
  (state, payload) => ({ ...state, test: payload })
);
