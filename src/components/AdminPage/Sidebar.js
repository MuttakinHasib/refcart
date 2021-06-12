import {
  ClipboardListIcon,
  CollectionIcon,
  HomeIcon,
  ShoppingBagIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0 w-72 h-full bg-gray-800 shadow-md z-10'>
      <div className='text-white bg-gray-900 font-bold text-base uppercase text-center py-5'>
        Refcart
      </div>
      <div className='py-5'>
        <Link href='/admin'>
          <a className='flex gap-3 items-center my-1 px-4 py-3 text-white border-l-4 border-blue-600 bg-gray-900'>
            <HomeIcon className='w-5' />
            <span>Dashboard</span>
          </a>
        </Link>
        <Link href='/admin/category'>
          <a className='flex gap-3 items-center my-1 px-4 py-3 text-white border-l-4 border-transparent hover:border-blue-600 hover:bg-gray-900 transition duration-300'>
            <CollectionIcon className='w-5' />
            <span>Category</span>
          </a>
        </Link>
        <Link href='/admin/products'>
          <a className='flex gap-3 items-center my-1 px-4 py-3 text-white border-l-4 border-transparent hover:border-blue-600 hover:bg-gray-900 transition duration-300'>
            <ShoppingBagIcon className='w-5' />
            <span>Products</span>
          </a>
        </Link>
        <Link href='/admin/orders'>
          <a className='flex gap-3 items-center my-1 px-4 py-3 text-white border-l-4 border-transparent hover:border-blue-600 hover:bg-gray-900 transition duration-300'>
            <ClipboardListIcon className='w-5' />
            <span>Orders</span>
          </a>
        </Link>
        <Link href='/admin/users'>
          <a className='flex gap-3 items-center my-1 px-4 py-3 text-white border-l-4 border-transparent hover:border-blue-600 hover:bg-gray-900 transition duration-300'>
            <UsersIcon className='w-5' />
            <span>Users</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
