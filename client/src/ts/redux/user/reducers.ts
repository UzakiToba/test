import { reducerWithInitialState } from 'typescript-fsa-reducers';

import Model from './model';

import * as actions from './actions';

export default reducerWithInitialState(new Model()).case(
  actions.catchToken,
  (state, payload) => state.catchToken(payload)
);
