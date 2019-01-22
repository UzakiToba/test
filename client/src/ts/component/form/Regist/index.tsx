import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// parts
import PartsButtonGlay from '../../parts/button/Gray/';

import { IStore, ICommon } from '../../../redux/';

interface IProps {}
interface IMerge extends IProps {
  store: ICommon;
  dispatch: Dispatch;
}
interface IState {
  success: boolean;
  val_userId: string;
}

class FormRegist extends React.Component<IMerge, IState> {
  private refElementForm: React.RefObject<HTMLFormElement>;
  constructor(props: IMerge) {
    super(props);
    this.state = {
      success: true,
      val_userId: ''
    };
    this.refElementForm = React.createRef();
    this.changeValueSingle = this.changeValueSingle.bind(this);
    this.changeValueAll = this.changeValueAll.bind(this);
  }
  private changeValueAll(e: React.FormEvent<HTMLFormElement>) {
    if (!!this.refElementForm.current) {
      console.log(this.refElementForm.current.userId);
    }
  }
  private changeValueSingle(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    console.log(e.target.getAttribute('name'));
    console.log(target);
    // this.setState({ [value_${e.target.name}]: e.target.value });
  }
  render() {
    return (
      <form ref={this.refElementForm}>
        <dl>
          <div>
            <dt>ユーザーID</dt>
            <dd>
              <input
                type="text"
                name="userId"
                onChange={this.changeValueSingle}
                value={this.state.val_userId}
              />
            </dd>
          </div>
          <div>
            <dt>メールアドレス</dt>
            <dd>
              <input type="text" />
            </dd>
          </div>
          <div>
            <dt>パスワード</dt>
            <dd>
              <input type="password" />
            </dd>
          </div>
          <div>
            <dt>パスワード(確認)</dt>
            <dd>
              <input type="password" />
            </dd>
          </div>
        </dl>
        <div>
          <PartsButtonGlay.Input
            type="submit"
            value="アカウントを新規作成"
            disabled={!this.state.success}
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  store: {
    common: state.common
  }
});
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });
const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge =>
  Object.assign({}, store, dispatch, ownProps);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  { areStatePropsEqual: () => false }
)(FormRegist);
