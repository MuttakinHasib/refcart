import { useRouter } from 'next/router';
import { AccountScreenLayout } from './AccountPage';
import { Sidebar } from './AdminPage';
import AdminScreenLayout from './AdminPage/AdminScreenLayout';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isAdmin = pathname.split('/')[1] === 'admin';

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
