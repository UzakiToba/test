import * as React from 'react';
import { Link } from 'react-router-dom';
// config
// const htmlCfg = require('../../../../../config/htmlCfg');

// component

interface IProps {}

const NoMatch: React.SFC<IProps> = () => {
  return (
    <React.Fragment>
      <p>NoMatch</p>
    </React.Fragment>
  );
};

export default NoMatch;
