import SectionTitle from '@components/AdminPage/SectionTitle';
import { Loader, NoData } from '@components/Shared';
import { ProductSkeleton, SectionTitleSkeleton } from '@components/Skeleton';
import { attemptDeleteProduct } from '@features/user/userActions';
import { getAllUsers, removeImage } from '@utils/api';
import { Image } from 'cloudinary-react';
import Link from 'next/link';
import Moment from 'react-moment';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

const UsersScreen = () => {
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector(state => state.auth);

  const { data: users, isLoading } = useQuery(
    ['users', { token }],
    getAllUsers
  );

  const handleProductDelete = (id, images) => {
    dispatch(attemptDeleteProduct(id));
    images.forEach(async image => {
      await removeImage(image.public_id);
    });
  };

  if (isLoading) {
    return (
      <>
        <SectionTitleSkeleton />
        <ProductSkeleton />
      </>
    );
  }

  return (
    <>
      <SectionTitle title='Users' subtitle='All users in your shop' />
      {users.length === 0 ? (
        <NoData title='User list is empty' />
      ) : (
        <div className='bg-white my-10'>
          <div className='flex items-center justify-between space-x-5 flex-wrap px-8 py-6 border-b border-gray-100'>
            <input
              type='search'
              name='search'
              id='search'
              className='bg-gray-100 block border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 focus:bg-white placeholder-gray-400'
              placeholder='Search user'
            />
            <div className='flex items-center space-x-5'>
              <select
                name='category'
                id='category'
                className={`block w-48 border bg-gray-100 border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 focus:bg-white placeholder-gray-400`}
              >
                <option>All category</option>
                <option selected value='Bangladesh'>
                  Bangladesh
                </option>
              </select>
            </div>
          </div>
          <div className='py-8 divide-y divide-gray-100'>
            {users.map(user => (
              <div
                key={user._id}
                className='grid grid-cols-7 items-center px-8 gap-y-5 hover:bg-gray-100 py-5'
              >
                <div className='col-span-2'>
                  <div className='flex items-center space-x-5'>
                    <Image
                      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                      publicId={
                        user.avatar.public_id ? user.avatar.public_id : null
                      }
                      src={!user.avatar.public_id ? user.avatar : null}
                      alt=''
                      height={64}
                      width={80}
                      crop='scale'
                      className='object-cover rounded-lg'
                    />
                    <Link href={`/admin/user/edit/${user._id}`}>
                      <a className='text-gray-700 text-lg font-medium hover:underline'>
                        {user.name}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='col-span-2'>
                  <a
                    href={`mailto:${user.email}`}
                    className='text-gray-700 hover:underline block'
                  >
                    {user.email}
                  </a>
                </div>
                <div className='md:mx-auto'>
                  {user.isAdmin ? (
                    <span className='text-sm font-semibold py-1 px-3 bg-green-200 rounded-2xl text-green-900 border border-green-300'>
                      Admin
                    </span>
                  ) : (
                    <span className='text-sm font-semibold py-1 px-3 bg-red-200 rounded-2xl text-red-900 border border-red-300'>
                      Subscriber
                    </span>
                  )}
                </div>
                <div className='md:mx-auto'>
                  <p className='text-gray-700'>
                    Joined <Moment fromNow>{user.createdAt}</Moment>
                  </p>
                </div>
                <div className='flex items-center ml-auto space-x-3'>
                  <Link href={`/admin/users/edit/${user._id}`}>
                    <a className='py-2 px-4 bg-white text-black border rounded'>
                      Edit
                    </a>
                  </Link>
                  <button
                    className='py-2 px-4 bg-red-500 text-white rounded'
                    onClick={() => handleProductDelete(user._id, user.images)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UsersScreen;
