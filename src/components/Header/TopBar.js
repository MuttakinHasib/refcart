import Link from 'next/link';

const TopBar = () => {
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
          <a
            href=''
            className='text-center text-gray-700 hover:text-primary transition relative'
          >
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
                strokeWidth={2}
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
            <div className='text-xs leading-3'>Wish List</div>
            <span className='absolute right-0 -top-2 w-5 h-5 flex items-center justify-center rounded-full text-white bg-primary text-xs'>
              5
            </span>
          </a>
          <a
            href=''
            className='text-center text-gray-700 hover:text-primary transition relative'
          >
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
                strokeWidth={2}
                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
              />
            </svg>
            <div className='text-xs leading-3'>Shopping Bag</div>
            <span className='absolute right-4 -top-2 w-5 h-5 flex items-center justify-center rounded-full text-white bg-primary text-xs'>
              5
            </span>
          </a>
          <a
            href=''
            className='text-center text-gray-700 hover:text-primary transition relative'
          >
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
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            <div className='text-xs leading-3'>Account</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
