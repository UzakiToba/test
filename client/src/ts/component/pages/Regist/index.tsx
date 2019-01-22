import * as React from 'react';
import { Helmet } from 'react-helmet';

// config
const htmlCfg = require('../../../../../../config/htmlCfg');

// component
import FormRegist from '../../form/Regist/';

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
      <FormRegist />
    </React.Fragment>
  );
};

export default Regist;
