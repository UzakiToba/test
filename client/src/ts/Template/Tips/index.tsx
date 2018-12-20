import * as React from 'react';

// ドット記法
const MyComponents = {
  Start: (props: any) => <div>Start: {props.text}</div>,
  End: (props: any) => <div>End: {props.text}</div>
};

const App = () => {
  return (
    <div>
      <MyComponents.Start text="hoge" />
      <MyComponents.End text="hoge" />
    </div>
  );
};

// JS式
const Item = (props: any) => {
  return <li>{props.text}</li>;
};

const TodoList = () => {
  const todos = ['hoge', 'huga', 'piyo'];
  return (
    <ul>
      {todos.map(text => (
        <Item key={text} text={text} />
      ))}
    </ul>
  );
};

class App2 extends React.Component {
  public render() {
    return <div>{TodoList()}</div>;
  }
}

// JS式children

const Repeat = (props: any) => {
  const items: JSX.Element[] = [];
  for (let i = 0; i < props.numTime; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
};

// 小要素に関数を渡す
const FunctionAsChildren = () => {
  return (
    <Repeat numTimes={10}>
      {(index: any) => <div key={index}>{index}</div>}
    </Repeat>
  );
};

class App3 extends React.Component {
  public render() {
    return <div>{FunctionAsChildren()}</div>;
  }
}
