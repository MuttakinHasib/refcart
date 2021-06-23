import { useEffect } from 'react';
import Router from 'next/router';
import { RedirectLoader } from '@components/index';
import { useSelector } from 'react-redux';

export const withAdminRoute = Component => {
  const RequireAuthentication = props => {
    const { user } = useSelector(state => state.auth);

    useEffect(() => {
      if (user && !user.isAdmin) {
        Router.push('/');
      }
    }, [user]);
    return user ? <Component {...props} /> : <RedirectLoader to='Home' />;
  };
  return RequireAuthentication;
};
