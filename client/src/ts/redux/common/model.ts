import { Record } from 'immutable';

export interface ICommon {
  test: string;
}

const initialState: Record.Factory<ICommon> = Record({
  test: 'hoge'
});

class CommonModel extends initialState implements ICommon {
  public testAction(payload: string) {
    return this.set('test', payload);
  }
}

export default CommonModel;
