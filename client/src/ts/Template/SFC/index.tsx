import * as React from 'react';
interface IProps {
  test?: string;
}

export const Template: React.SFC<IProps> = props => {
  return (
    <React.Fragment>
      <p className="templateSFC">{props.test}TemplateSFC</p>
    </React.Fragment>
  );
};

Template.defaultProps = {
  test: 'test'
};

export default Template;
