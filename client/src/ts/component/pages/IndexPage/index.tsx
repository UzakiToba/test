import * as React from 'react';
import { Link } from 'react-router-dom';
// config
// const htmlCfg = require('../../../../../config/htmlCfg');

// component
import PartsButtonGlay from '../../parts/button/Gray/';

interface IProps {}

const IndexPage: React.SFC<IProps> = () => {
  return (
    <React.Fragment>
      <p>IndexPage</p>
      <PartsButtonGlay.Link to="/huga" text="huga" />
    </React.Fragment>
  );
};

export default IndexPage;
