import { Record } from 'immutable';

export interface IWindow {
  test: string;
}

const initialState: Record.Factory<IWindow> = Record({
  windowSize: 0,
  test: 'hoge'
});

class WindowModel extends initialState implements IWindow {
  public testAction(payload: string) {
    return this.set('test', payload);
  }
}

export default WindowModel;
