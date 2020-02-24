import React from 'react';
import IconGithub from 'components/icons/IconGithub';
import { NextPage } from 'next';
import { CORE_API } from 'utils/constants';

export interface LoginPageProps {
  redirectUrl: string;
  apiUrl: string;
}

const LoginPage: NextPage<LoginPageProps> = ({ redirectUrl, apiUrl }) => {
  return (
    <div>
      <h1>Login</h1>
      <a
        className="inline-flex items-center px-3 py-2 rounded-full text-white bg-secondary"
        href={`${apiUrl}/auth/github?r=${redirectUrl}`}
      >
        <IconGithub className="mr-2" /> Log in with Github
      </a>
    </div>
  );
};

LoginPage.getInitialProps = ctx => {
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

  const redirectUrl = !!process.browser
    ? `${protocol}://${window.location.host}`
    : `${protocol}://${ctx.req?.headers.host}`;

  const apiUrl = CORE_API.replace('/graphql', '');

  return { redirectUrl, apiUrl };
};

export default LoginPage;
