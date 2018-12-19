import * as React from 'react';
import { Link } from 'react-router-dom';
// config
// const htmlCfg = require('../../../../../config/htmlCfg');

// component
import PartsButtonGlay from '../../parts/button/Gray/';

interface IProps {}

const Home: React.SFC<IProps> = () => {
  return (
    <React.Fragment>
      <p>home</p>
      <PartsButtonGlay.Link to="/huga" text="huga" />
    </React.Fragment>
  );
};

export default Home;
