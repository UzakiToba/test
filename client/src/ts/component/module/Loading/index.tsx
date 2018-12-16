import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// fn
import GetDocumentSize from '../../../../../../asset/fn/GetDocumentSize';

import { IStore, ICommon } from '../../../redux/';
type IStoreCommon = ICommon;
interface IProps {}
interface IMerge extends IProps {
  store: IStoreCommon;
  dispatch: Dispatch;
}
interface IState {
  height: number;
}

class Loading extends React.Component<IMerge, IState> {
  constructor(props: IMerge) {
    super(props);
    this.state = { height: 0 };
  }
  public componentDidMount() {
    this.setState({ height: GetDocumentSize().h });
  }
  render() {
    return (
      <div
        className="moduleLoading"
        style={{ height: `${this.state.height}px` }}
      >
        <div className="moduleLoading_item" aria-label="Now Loading..." />
        <div className="moduleLoading_text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
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
  mergeProps
)(Loading);
