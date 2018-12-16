import { Record } from 'immutable';

export interface ICommon {
  isFetching: boolean;
  test: string;
}

const initialState: Record.Factory<ICommon> = Record({
  isFetching: false,
  test: 'hoge'
});

class CommonModel extends initialState implements ICommon {
  public testAction(payload: string) {
    return this.set('test', payload);
  }
  public fetchCtr(bool: boolean) {
    return this.set('isFetching', bool);
  }
}

export default CommonModel;
