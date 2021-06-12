import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, SearchIcon } from '@heroicons/react/outline';

const profile = ['Your Profile', 'Sign out'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AdminTopBar = () => {
  return (
    <div className='h-16 bg-white shadow-sm pl-80 pr-8 w-full fixed top-0 left-0 flex items-center'>
      <div className='relative'>
        <SearchIcon className='absolute left-4 top-[9px] w-6 text-gray-400' />
        <input
          type='text'
          className='block w-72 border-none rounded-3xl focus:ring-0 py-2 bg-gray-50 text-base text-gray-600 pl-12'
          placeholder='Search...'
        />
      </div>
      <div className='ml-auto flex gap-3 items-center'>
        <div>
          <button className='w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-full'>
            <span className='sr-only'>View notifications</span>
            <BellIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Menu as='div' className='relative'>
          {({ open }) => (
            <>
              <div>
                <Menu.Button className='max-w-xs bg-gray-50 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white'>
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-9 w-9 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </Menu.Button>
              </div>
              <Transition
                show={open}
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items
                  static
                  className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                >
                  {profile.map(item => (
                    <Menu.Item key={item}>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          {item}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default AdminTopBar;
