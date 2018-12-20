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
    return <div>hoge</div>;
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
