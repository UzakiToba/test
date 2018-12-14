import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';
import Model from './model';

export default reducerWithInitialState(new Model()).case(
  actions.testAction,
  (state, payload) => state.testAction(payload)
);
