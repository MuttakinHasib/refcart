import { logout } from '@features/auth/authSlice';
import { Menu, Transition } from '@headlessui/react';
import {
  LogoutIcon,
  ShoppingBagIcon,
  UserIcon,
  GiftIcon,
  HeartIcon,
  IdentificationIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const TopBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  return (
    <div className='py-4 shadow-sm bg-white'>
      {/* logo */}
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <a>
            <img src='/images/logo.svg' alt='' className='w-32' />
          </a>
        </Link>
        <div className='w-full hidden max-w-lg xl:max-w-xl relative lg:flex items-center'>
          <span className='absolute top-3 left-4 text-base text-gray-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </span>
          <input
            type='text'
            className='w-full border border-primary border-r-0 pl-12 py-2 pr-4 rounded-l-md focus:outline-none'
            placeholder='Search...'
          />
          <button className='bg-primary border border-primary text-white px-6 py-2 rounded-r-md focus:outline-none transition'>
            Search
          </button>
        </div>
        <div className='flex items-center space-x-4'>
          <Link href='/wishlist'>
            <a className='text-center hidden md:inline-block text-gray-700 hover:text-primary transition relative'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 mx-auto mb-1 '
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
              <div className='text-xs leading-3'>Wish List</div>
              <span className='absolute right-0 -top-2 w-5 h-5 flex items-center justify-center rounded-full text-white bg-primary text-xs'>
                5
              </span>
            </a>
          </Link>
          <Link href='/cart'>
            <a className='text-center text-gray-700 hover:text-primary transition relative'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 mx-auto mb-1 '
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
              <div className='text-xs leading-3'>Shopping Bag</div>
              <span className='absolute right-4 -top-2 w-5 h-5 flex items-center justify-center rounded-full text-white bg-primary text-xs'>
                5
              </span>
            </a>
          </Link>
          <Menu as='div' className='relative'>
            {({ open }) => (
              <>
                <Menu.Button className='text-center text-gray-700 hover:text-primary transition'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 mx-auto mb-1 '
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1}
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                  <div className='text-xs leading-3'>Account</div>
                </Menu.Button>
                <Transition
                  show={open}
                  as='div'
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items
                    // static
                    // className='origin-top-right z-50 absolute right-0 mt-2 w-52 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                    className='absolute z-50 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  >
                    {!user && (
                      <div className='py-2 px-3'>
                        <h3 className='text-center mt-1 text-gray-600 font-medium'>
                          Welcome to Refcart Shop
                        </h3>
                        <div className='flex items-center justify-center my-3 gap-3'>
                          <Link href='/register'>
                            <a className='w-full bg-primary py-1 px-4 text-white rounded uppercase border border-primary text-sm text-center inline-block'>
                              Join
                            </a>
                          </Link>
                          <Link href='/login'>
                            <a className='w-full bg-white py-1 px-4 text-primary rounded uppercase border border-primary text-sm text-center inline-block'>
                              Sign in
                            </a>
                          </Link>
                        </div>
                      </div>
                    )}
                    <div className='py-2'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href='/account'>
                            <a className='group hover:bg-gray-100 text-gray-600 flex items-center w-full px-3 py-2 text-sm transition duration-300'>
                              <IdentificationIcon
                                className='w-5 h-5 mr-2'
                                aria-hidden='true'
                              />
                              My Account
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href='/account/orders'>
                            <a className='group hover:bg-gray-100 text-gray-600 flex items-center w-full px-3 py-2 text-sm transition duration-300'>
                              <GiftIcon
                                className='w-5 h-5 mr-2'
                                aria-hidden='true'
                              />
                              My Orders
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href='/account/wishlist'>
                            <a className='group hover:bg-gray-100 text-gray-600 flex items-center w-full px-3 py-2 text-sm transition duration-300'>
                              <HeartIcon
                                className='w-5 h-5 mr-2'
                                aria-hidden='true'
                              />
                              My Wishlist
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href='/cart'>
                            <a className='group hover:bg-gray-100 text-gray-600 flex items-center w-full px-3 py-2 text-sm transition duration-300'>
                              <ShoppingBagIcon
                                className='w-5 h-5 mr-2'
                                aria-hidden='true'
                              />
                              My Cart
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    {user && (
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className='group hover:bg-gray-100 text-gray-600 flex items-center w-full px-3 py-2 text-sm transition duration-300'
                            onClick={() => dispatch(logout())}
                          >
                            <LogoutIcon
                              className='w-5 h-5 mr-2'
                              aria-hidden='true'
                            />
                            Log out
                          </button>
                        )}
                      </Menu.Item>
                    )}
                    {/* <Menu.Item>
                      {({ active }) => (
                        <>
                          <Link href='/account'>
                            <a
                              className={
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                              }
                            >
                              My Account
                            </a>
                          </Link>
                          <Link href='/account/orders'>
                            <a
                              className={
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                              }
                            >
                              My Order
                            </a>
                          </Link>
                          <Link href='/account/wishlist'>
                            <a
                              className={
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                              }
                            >
                              My Wishlist
                            </a>
                          </Link>
                          <Link href='/cart'>
                            <a
                              className={
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                              }
                            >
                              My Cart
                            </a>
                          </Link>
                          <button
                            className={
                              'block focus:outline-none px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                            }
                          >
                            Log out
                          </button>
                        </>
                      )}
                    </Menu.Item> */}
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
