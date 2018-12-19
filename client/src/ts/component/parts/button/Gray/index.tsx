import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  id?: string;
  className?: string[];
  action?: any;
}
interface IPropsButton extends IProps {
  type: string;
  text: string | JSX.Element;
  disabled?: boolean;
}
interface IPropsInput extends IProps {
  type: string;
  value: string;
  disabled?: boolean;
}
interface IPropsA extends IProps {
  text: string | JSX.Element;
  href: string;
}
interface IPropsLink extends IProps {
  text: string | JSX.Element;
  to: string;
}

const check = (text: string | JSX.Element) => {
  if (typeof text === 'string') {
    return <span>{text}</span>;
  }
  return text;
};
const wrap = (props: any, type: string) => {
  return React.createElement(
    type,
    {
      id: props.id,
      className: !!props.className
        ? ['partsButton-glay', ...props.className].join(' ')
        : 'partsButton-glay',
      type: type === 'input' || type === 'button' ? props.type : null,
      href: type === 'a' ? props.href : null,
      disabled: props.disabled,
      onClick: props.action,
      value: type === 'input' ? props.value : null
    },
    type !== 'input' ? check(props.text) : null
  );
};

const PartsButtonGlay = {
  Button: (props: IPropsButton): JSX.Element => {
    return wrap(props, 'button');
  },
  Input: (props: IPropsInput): JSX.Element => {
    return wrap(props, 'input');
  },
  A: (props: IPropsA): JSX.Element => {
    return wrap(props, 'a');
  },
  Link: (props: IPropsLink): JSX.Element => {
    return (
      <Link
        to={props.to}
        id={props.id}
        className={
          !!props.className
            ? ['partsButton-glay', ...props.className].join(' ')
            : 'partsButton-glay'
        }
        onClick={props.action}
      >
        <span>{props.text}</span>
      </Link>
    );
  }
};

export default PartsButtonGlay;
