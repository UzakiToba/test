import * as React from 'react';
import { Helmet } from 'react-helmet';

// config
const htmlCfg = require('../../../../../../config/htmlCfg');

interface IProps {}

const Head = () => {
  return (
    <Helmet>
      <title>{htmlCfg.siteName} | Login</title>
      {/*<meta name="discription" content="login" />*/}
      <link rel="canonical" href={`${htmlCfg.siteUrl}regist`} />
    </Helmet>
  );
};

const Regist: React.SFC<IProps> = () => {
  return (
    <React.Fragment>
      <Head />
      <div>regist</div>
    </React.Fragment>
  );
};

export default Regist;
