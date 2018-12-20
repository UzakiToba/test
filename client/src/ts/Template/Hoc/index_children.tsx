/* HOC-children */
import * as React from 'react';

const TextContent: React.SFC<{ text: string }> = ({ text }) => {
  return <div>{text}</div>;
};

const ListContent: React.SFC<{ contents: string[] }> = ({ contents }) => {
  return (
    <ul>
      {contents.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};

class Wrapper extends React.Component<
  { color1: string; color2: string },
  { color: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { color: this.props.color1 };
    this.changeColor = this.changeColor.bind(this);
  }
  public changeColor() {
    const { color1, color2 } = this.props;
    this.setState({ color: this.state.color === color1 ? color2 : color1 });
  }
  public render() {
    const { color } = this.state;
    return (
      <div style={{ color }} onClick={this.changeColor}>
        {this.props.children}
      </div>
    );
  }
}

const Hoc = () => {
  return (
    <div>
      <p>hoc</p>
      <Wrapper color1="black" color2="red">
        <TextContent text="xyz" />
      </Wrapper>
      <Wrapper color1="black" color2="orange">
        <ListContent contents={['abc', '123', 'def']} />
      </Wrapper>
    </div>
  );
};

export default Hoc;
