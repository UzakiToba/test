import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// config
const htmlCfg = require('../../../../../../config/htmlCfg');

// component
import PartsButtonGlay from '../../parts/button/Gray/';

const Head = () => (
  <Helmet>
    <title>{htmlCfg.siteName} | Home</title>
    {/*<meta name="discription" content="login" />*/}
    <link rel="canonical" href={`${htmlCfg.siteUrl}home`} />
  </Helmet>
);

interface IProps {}

const Home: React.SFC<IProps> = () => {
  return (
    <React.Fragment>
      <Head />
      <p>home</p>
      <PartsButtonGlay.Link to="/huga" text="huga" />
    </React.Fragment>
  );
};

export default Home;
