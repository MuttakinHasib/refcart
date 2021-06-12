import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isAdmin = pathname.split('/')[1] === 'admin';

  return (
    <>
      <Header />
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
};

export default Layout;
