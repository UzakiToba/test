import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IStore, IUser } from '../../../redux/';

interface IProps {}
interface IMerge extends IProps {
  store: IUser;
  dispatch: Dispatch;
}

class Footer extends React.Component<IMerge, {}> {
  constructor(props: IMerge) {
    super(props);
  }
  render() {
    return (
      <footer>
        <p>Footer</p>
      </footer>
    );
  }
}

const mapStateToProps = (state: IStore) => ({ store: { user: state.user } });
const masDispatchToProps = (dispatch: Dispatch) => ({ dispatch });
const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge =>
  Object.assign({}, store, dispatch, ownProps);

export default connect(
  mapStateToProps,
  masDispatchToProps,
  mergeProps
)(Footer);
