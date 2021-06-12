import Link from 'next/link';

const BreadCrumbs = ({ items }) => {
  return (
    <div className='container py-4 flex items-center gap-3'>
      <Link href='/'>
        <a className='text-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
        </a>
      </Link>
      {items.map((item, index) => (
        <div key={index} className='flex items-center gap-3'>
          {items.length - 1 === index ? (
            <>
              <div className='text-gray-400'>
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
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </div>
              <p className='text-gray-600 font-medium'>{item}</p>
            </>
          ) : (
            <>
              <div className='text-gray-600'>
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
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </div>
              <Link href={`/${item.toLowerCase()}`}>
                <a className='text-primary font-medium'>{item}</a>
              </Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
