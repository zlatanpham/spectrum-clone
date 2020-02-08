import Router from 'next/router';
import nextCookie from 'next-cookies';
import { NextPage, NextPageContext } from 'next';
import cookie from 'js-cookie';
import { useEffect } from 'react';

export const auth = (ctx: NextPageContext) => {
  const { token } = nextCookie(ctx);

  // If there's no token, it means the user is not logged in.
  if (!token && ctx.res) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push('/login');
  }

  return token;
};

export const logout = () => {
  cookie.remove('token');
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now().toString());
  Router.push('/login');
};

export const withAuthSync = (WrappedComponent: NextPage) => {
  const Wrapper: NextPage = props => {
    const syncLogout = (e: StorageEvent) => {
      if (e.key === 'logout') {
        Router.push('/login');
      }
    };

    useEffect(() => {
      window.addEventListener('storage', syncLogout);

      return () => {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, isLogged: !!token };
  };

  return Wrapper;
};
