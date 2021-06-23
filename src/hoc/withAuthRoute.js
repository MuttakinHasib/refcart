import { useEffect } from 'react';
import Router from 'next/router';
import { Loader } from '@components/index';
import { useSelector } from 'react-redux';

export const withAuthRoute = Component => {
  const RequireAuthentication = props => {
    const { user } = useSelector(state => state.auth);

    useEffect(() => {
      if (!user) {
        Router.push('/login');
      }
    }, [user]);
    return user ? <Component {...props} /> : <Loader />;
  };
  return RequireAuthentication;
};
