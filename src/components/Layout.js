import { attemptGetUserProfile } from '@features/user/userActions';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccountScreenLayout } from './AccountPage';
import AdminScreenLayout from './AdminPage/AdminScreenLayout';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { user: authUser } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.user);
  const { pathname } = useRouter();
  const isAdmin = pathname.split('/')[1] === 'admin';

  useEffect(() => {
    if (authUser && !user) {
      dispatch(attemptGetUserProfile());
    }
  }, [dispatch, user]);
  
  return isAdmin ? (
    <AdminScreenLayout>{children}</AdminScreenLayout>
  ) : (
    <>
      <Header />
      <main>
        {pathname.split('/')[1] === 'account' ? (
          <AccountScreenLayout>{children}</AccountScreenLayout>
        ) : (
          children
        )}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
