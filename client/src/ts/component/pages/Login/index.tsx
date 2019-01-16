import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// config
const htmlCfg = require('../../../../../../config/htmlCfg');

const Head = () => (
  <Helmet>
    <title>{htmlCfg.siteName} | Login</title>
    {/*<meta name="discription" content="login" />*/}
    <link rel="canonical" href={`${htmlCfg.siteUrl}login`} />
  </Helmet>
);

// component
import FormLogin from '../../form/Login/';

interface IProps {}

const Login: React.SFC<IProps> = () => {
  return (
    <React.Fragment>
      <Head />
      <FormLogin />
    </React.Fragment>
  );
};

export default Login;
