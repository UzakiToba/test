import * as React from 'react';

// fn
import GetDocumentSize from '../../../../../../asset/fn/GetDocumentSize';

interface IState {
  height: number;
}

class Loading extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { height: 0 };
  }
  public shouldComponentUpdate(nextProps: {}, nextState: IState): boolean {
    return false;
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

export default Loading;
