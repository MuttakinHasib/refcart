import SectionTitle from '@components/AdminPage/SectionTitle';
import { DashboardSkeleton, SectionTitleSkeleton } from '@components/Skeleton';
import { getAllProducts, getAllUsers } from '@utils/api';
import { useQuery } from 'react-query';

const DashboardScreen = () => {
  const { data: users, isLoading: isUsersLoading } = useQuery(
    'users',
    getAllUsers
  );
  const { data: products, isLoading: isProductsLoading } = useQuery(
    'products',
    getAllProducts
  );

  if (isUsersLoading || isProductsLoading) {
    return (
      <>
        <SectionTitleSkeleton />
        <DashboardSkeleton />
      </>
    );
  }

  return (
    <>
      <SectionTitle
        title='Dashboard'
        subtitle='Whole data about your business'
      />
      <div className='grid grid-cols-4 gap-10 my-10'>
        {/* All users */}
        <div className='bg-white border-2 border-gray-100 p-5 flex items center space-x-5 rounded-md'>
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-purple-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          </div>
          <div>
            <h4 className='text-lg font-medium text-gray-600'>Users</h4>
            {!isUsersLoading && (
              <h2 className='text-2xl font-semibold text-gray-500 mt-3'>
                {users.length}
              </h2>
            )}
            <span className='text-sm font-light text-gray-500'>All users</span>
          </div>
        </div>
        {/* All orders */}
        <div className='bg-white border-2 border-gray-100 p-5 flex items center space-x-5 rounded-md'>
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-green-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
              />
            </svg>
          </div>
          <div>
            <h4 className='text-lg font-medium text-gray-600'>Orders</h4>
            {!isUsersLoading && (
              <h2 className='text-2xl font-semibold text-gray-500 mt-3'>
                {users.length}
              </h2>
            )}
            <span className='text-sm font-light text-gray-500'>
              Excluding orders in transit
            </span>
          </div>
        </div>
        {/* All products */}
        <div className='bg-white border-2 border-gray-100 p-5 flex items center space-x-5 rounded-md'>
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
              />
            </svg>
          </div>
          <div>
            <h4 className='text-lg font-medium text-gray-600'>Products</h4>
            {!isProductsLoading && (
              <h2 className='text-2xl font-semibold text-gray-500 mt-3'>
                {products.length}
              </h2>
            )}
            <span className='text-sm font-light text-gray-500'>
              In 19 Categories
            </span>
          </div>
        </div>
        {/* Revenue */}
        <div className='bg-white border-2 border-gray-100 p-5 flex items center space-x-5 rounded-md'>
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div>
            <h4 className='text-lg font-medium text-gray-600'>Revenue</h4>
            {!isUsersLoading && (
              <h2 className='text-2xl font-semibold text-gray-500 mt-3'>
                ${users.length}
              </h2>
            )}
            <span className='text-sm font-light text-gray-500'>
              Shipping fees are included
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
