import { Record } from 'immutable';

export interface IUser {
  token: boolean;
}

export const InitState: Record.Factory<IUser> = Record({
  token: false
});

export default class UserModel extends InitState implements IUser {
  public catchToken(payload: boolean) {
    return this.set('token', payload);
  }
}
