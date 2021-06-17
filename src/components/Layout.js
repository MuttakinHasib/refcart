import { useRouter } from 'next/router';
import { AccountScreenLayout } from './AccountPage';
import { Sidebar } from './AdminPage';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isAdmin = pathname.split('/')[1] === 'admin';

  return (
    <>
      <Header />
      {isAdmin && <Sidebar />}
      <main className={isAdmin ? 'min-h-screen bg-gray-100' : ''}>
        {pathname.split('/')[1] === 'account' ? (
          <AccountScreenLayout>{children}</AccountScreenLayout>
        ) : (
          children
        )}
      </main>
      {!isAdmin && <Footer />}
    </>
  );
};

export default Layout;
