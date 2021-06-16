import Link from 'next/link';
import { BreadCrumbs } from '@components/index';
import { CheckCircleIcon } from '@heroicons/react/solid';

const OrderCompleteScreen = () => {
  return (
    <>
      <BreadCrumbs items={['Order Completed']} />
      <div className='container py-16'>
        <div className='text-center'>
          <CheckCircleIcon className='w-20 text-primary mx-auto' />
          <h2 className='mt-8 text-3xl font-semibold uppercase'>
            Your order is completed!
          </h2>
          <p className='md:w-3/4 mx-auto text-gray-700 mt-4 mb-6'>
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Link href='/shop'>
            <a className='focus:outline-none uppercase font-medium rounded border border-primary px-5 py-2 space-x-2 bg-primary text-white hover:bg-opacity-80 transition'>
              Continue Shopping
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderCompleteScreen;
