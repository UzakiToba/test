import * as React from 'react';

interface IProps {
  store: any;
}

class Test extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>{this.props.store.getState().common.test}</span>
      </div>
    );
  }
}

export default Test;
