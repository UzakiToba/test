import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// config
const htmlCfg = require('../../../../../../config/htmlCfg');

// component
import PartsButtonGlay from '../../parts/button/Gray/';

const Head = () => (
  <Helmet>
    <title>{htmlCfg.siteName} | index</title>
    {/*<meta name="discription" content="login" />*/}
    <link rel="canonical" href={`${htmlCfg.siteUrl}`} />
  </Helmet>
);

interface IProps {}

const IndexPage: React.SFC<IProps> = () => {
  return (
    <React.Fragment>
      <Head />
      <p>IndexPage</p>
    </React.Fragment>
  );
};

export default IndexPage;
