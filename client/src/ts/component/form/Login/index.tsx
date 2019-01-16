import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IStore, ICommon } from '../../../redux/';
interface IProps {}
interface IMerge extends IProps {
  store: ICommon;
  dispatch: Dispatch;
}
interface IState {}

class FormLogin extends React.Component<IMerge, IState> {
  constructor(props: IMerge) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <form>
        <dl>
          <div>
            <dt>
              <label htmlFor="formLogin_userInput">ユーザー名</label>
            </dt>
            <dd>
              <input id="formLogin_userInput" type="text" />
            </dd>
          </div>
          <div>
            <dt>
              <label htmlFor="formLogin_passInput">パスワード</label>
            </dt>
            <dd>
              <input id="formLogin_passInput" type="password" />
            </dd>
          </div>
        </dl>
        <input type="submit" value="送信" />
      </form>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  store: { common: state.common }
});
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });
const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge =>
  Object.assign({}, store, dispatch, ownProps);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  { areStatePropsEqual: () => false }
)(FormLogin);
