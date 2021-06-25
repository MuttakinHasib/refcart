import {
  ClipboardListIcon,
  CollectionIcon,
  HomeIcon,
  ShoppingBagIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import AdminActiveLink from './AdminActiveLink';

const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0 w-72 h-full bg-gray-800 shadow-md z-10'>
      <div className='text-white bg-gray-900 font-bold text-base uppercase text-center py-5'>
        Refcart
      </div>
      <div className='py-5'>
        <AdminActiveLink href='/admin/dashboard'>
          <HomeIcon className='w-5' />
          <span>Dashboard</span>
        </AdminActiveLink>
        <AdminActiveLink href='/admin/category'>
          <CollectionIcon className='w-5' />
          <span>Category</span>
        </AdminActiveLink>
        <AdminActiveLink href='/admin/products'>
          <ShoppingBagIcon className='w-5' />
          <span>Products</span>
        </AdminActiveLink>
        <AdminActiveLink href='/admin/orders'>
          <ClipboardListIcon className='w-5' />
          <span>Orders</span>
        </AdminActiveLink>
        <AdminActiveLink href='/admin/users'>
          <UsersIcon className='w-5' />
          <span>Users</span>
        </AdminActiveLink>
      </div>
    </div>
  );
};

export default Sidebar;
