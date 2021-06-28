import AdminTopBar from './AdminTopBar';
import Sidebar from './Sidebar';

const AdminScreenLayout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <AdminTopBar />
      <Sidebar />
      <div className='pt-24 pr-8 pb-8 pl-80 min-h-screen'>{children}</div>
    </div>
  );
};

export default AdminScreenLayout;
