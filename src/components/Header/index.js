import { AdminTopBar } from '@components/AdminPage';
import { useRouter } from 'next/router';
import NavBar from './NavBar';
import TopBar from './TopBar';

const Header = () => {
  const { pathname } = useRouter();
  const isAdmin = pathname.split('/')[1] === 'admin';
  return (
    <header>
      <>
        {isAdmin ? <AdminTopBar /> : <TopBar />}
        {!isAdmin && <NavBar />}
      </>
    </header>
  );
};

export default Header;
