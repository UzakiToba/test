import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// interface
import { IStore, ICommon, IWindow } from '../../redux';
interface IProps {}
interface IMerge extends IProps {
  store: IWindow & ICommon;
  dispatch: Dispatch;
}
interface IState {}

export class Tempalate extends React.Component<IMerge, IState> {
  constructor(props: IMerge) {
    super(props);
  }
  // 初回マウント時 propsから初期Stateを更新する
  static getDerivedStateFromProps(nextProps: IMerge, prevState: IState) {
    return null; // or newState
  }
  // 初回render後一度 初回非同期通信等を行う
  public componentDidMount() {}
  // update時再レンダリングを実行するかどうか確認
  public shouldComponentUpdate(nextProps: IMerge, nextState: IState): boolean {
    return true;
  }
  // update後に引き継ぎたい値がある時に使用
  public getSnapshotBeforeUpdate(prevProps: IMerge, prevState: IState) {
    return 'hoge'; // この値がcomponentDidUpdateの第三引数で渡される
  }
  // update毎 ここでstateを操作すると無限ループになる
  public componentDidUpdate(
    prevProps: IMerge,
    prevState: IMerge,
    snapshot: any
  ) {}
  // コンポーネント破棄直前
  public componentWillUnmount() {}
  render() {
    return <div>Template</div>;
  }
}

const mapStateToProps = (state: IStore) => ({
  store: {
    common: state.common,
    window: state.window
  }
});

const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge =>
  Object.assign({}, store, dispatch, ownProps);
const option = { areStatePropsEqual: () => false };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  option
)(Tempalate);
