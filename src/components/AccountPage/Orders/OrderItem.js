import Link from 'next/link';

const OrderItem = ({ order }) => {
  return (
    <div className='border border-gray-100 p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6'>
      <div className='col-span-2 sm:col-span-3 md:col-span-4'>
        <div className='flex items-center gap-3'>
          <img
            src='/images/products/product1.jpg'
            alt=''
            className='w-20 object-contain'
          />
          <img
            src='/images/products/product2.jpg'
            alt=''
            className='w-20 object-contain'
          />
        </div>
      </div>
      <div className='md:ml-auto row-start-4 sm:row-start-3 row-end-4 col-end-3 sm:col-end-4 md:col-auto md:row-auto'>
        <Link href={`/account/orders/1`}>
          <a className='inline-block border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white rounded transition duration-300'>
            View Order
          </a>
        </Link>
      </div>
      <div className='space-y-3'>
        <h2 className='text-base font-medium text-gray-800'>Order Number</h2>
        <p className='text-sm text-gray-600'>2FRD34S3GG</p>
      </div>
      <div className='space-y-3'>
        <h2 className='text-base font-medium text-gray-800'>Purchased</h2>
        <p className='text-sm text-gray-600'>01 March 2021</p>
      </div>
      <div className='space-y-3'>
        <h2 className='text-base font-medium text-gray-800'>Quantity</h2>
        <p className='text-sm text-gray-600'>x3</p>
      </div>
      <div className='space-y-3'>
        <h2 className='text-base font-medium text-gray-800'>Total</h2>
        <p className='text-sm text-gray-600'>$367.33</p>
      </div>
      <div className='space-y-3'>
        <h2 className='text-base font-medium text-gray-800'>Status</h2>
        <p className='text-sm text-green-500'>Delivered</p>
      </div>
    </div>
  );
};

export default OrderItem;
