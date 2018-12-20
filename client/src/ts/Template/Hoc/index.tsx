/* HOC */
import * as React from 'react';

interface ITextContent {
  text: string;
}
type ITextContentMarge = ITextContent & IFactory;
const TextContent: React.SFC<ITextContentMarge> = ({
  text,
  color,
  onClick
}) => {
  return (
    <span style={{ color }} onClick={onClick}>
      {text}
    </span>
  );
};

interface IListContent {
  contents: string[];
}
type IListContentMarge = IListContent & IFactory;
const ListContent: React.SFC<IListContentMarge> = ({
  contents,
  color,
  onClick
}) => {
  return (
    <ul style={{ color }} onClick={onClick}>
      {contents.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};

interface IFactory {
  color: string;
  onClick: () => void;
}
const Factory = (
  WrapComponent: React.SFC<ITextContentMarge | IListContentMarge>,
  color1: string,
  color2: string
) => {
  return class extends React.Component<
    ITextContent | IListContent,
    { color: string }
  > {
    constructor(props: any) {
      super(props);
      this.state = { color: color1 };
      this.changeColor = this.changeColor.bind(this);
    }
    public changeColor() {
      this.setState({ color: this.state.color === color1 ? color2 : color1 });
    }
    public render() {
      return (
        <WrapComponent
          {...this.props}
          color={this.state.color}
          onClick={this.changeColor}
        />
      );
    }
  };
};

const EnhancedTextContent = Factory(TextContent, 'black', 'red');
const EnhancedListContent = Factory(ListContent, 'black', 'orange');

const Hoc = () => {
  return (
    <div>
      <p>hoc</p>
      <EnhancedTextContent text="xyz" />
      <EnhancedListContent contents={['abc', '123', 'def']} />
    </div>
  );
};

export default Hoc;
