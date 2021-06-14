import Link from 'next/link';
import { BreadCrumbs } from '@components/index';

const NotFoundScreen = () => {
  return (
    <>
      <BreadCrumbs items={['404']} />
      <div className='container py-16 flex flex-col gap-8 items-center justify-center'>
        <div className='max-w-lg mx-auto'>
          <img src='/images/404.svg' alt='' className='w-full' />
        </div>
        <h2 className='text-lg md:text-3xl text-center'>
          The page you've requested is not available
        </h2>
        <Link href='/'>
          <a className='py-3 px-8 text-white bg-primary font-medium rounded'>
            Back to home
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFoundScreen;
