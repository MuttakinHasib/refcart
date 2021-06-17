import Link from 'next/link';

const OrderDetailsScreen = () => {
  return (
    <>
      <h2 className='text-xl pb-4 mb-5 capitalize text-gray-800 font-medium'>
        Order Details
      </h2>
      <div className='space-y-10'>
        <div className='border border-gray-100 rounded p-5 space-y-10'>
          <div className='flex items-center justify-between gap-6 flex-wrap'>
            <div className='space-y-3'>
              <h2 className='text-base font-medium text-gray-800'>Sold By</h2>
              <p className='text-sm text-gray-600'>REFCART</p>
            </div>
            <div className='space-y-3'>
              <h2 className='text-base font-medium text-gray-800'>
                Order Number
              </h2>
              <p className='text-sm text-gray-600'>2D5S6SEF22</p>
            </div>
            <div className='space-y-3'>
              <h2 className='text-base font-medium text-gray-800'>
                Shipped Date
              </h2>
              <p className='text-sm text-gray-600'>01 May 2021</p>
            </div>
            <div>
              <Link href={`/account/orders/1`}>
                <a className='inline-block border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white rounded transition duration-300'>
                  Write A Review
                </a>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-between gap-6 flex-wrap'>
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
            <div className='space-y-3'>
              <h2 className='text-base font-medium text-gray-800'>Quantity</h2>
              <p className='text-sm text-gray-600'>x3</p>
            </div>
            <div className='space-y-3'>
              <h2 className='text-base font-medium text-gray-800'>Total</h2>
              <p className='text-sm text-gray-600'>$12.33</p>
            </div>
            <div className='space-y-2'>
              <div>
                <Link href={`/account/orders/1`}>
                  <a className='uppercase text-lg font-medium text-primary hover:text-primary/90 transition'>
                    Return
                  </a>
                </Link>
              </div>
              <p className='text-sm text-gray-600'>Until 23 sep 2021</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between gap-5 flex-wrap'>
          <div className='border border-gray-100 p-5 w-full sm:w-auto sm:min-w-[24rem] rounded'>
            <h3 className='text-lg text-gray-800 mb-4'>Shipping Address</h3>
            <div className='text-gray-600'>
              <p>Ralph Bohner ,</p>
              <p>3891 Ranchview Dr. Richardson</p>
              <p>Califora (123) 456-789</p>
            </div>
          </div>
          <div className='border border-gray-100 p-5 w-full sm:w-auto sm:min-w-[24rem] rounded'>
            <h3 className='text-lg text-gray-800 mb-4'>Total Summery</h3>
            <div className='divide-y-2 divide-gray-200 space-y-3'>
              <div>
                <div className='flex items-center justify-between'>
                  <p className='text-gray-600'>Subtotal</p>
                  <p className='font-medium'>$50.00</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-gray-600'>Shipping Fee</p>
                  <p className='font-medium'>$30.00</p>
                </div>
              </div>
              <div>
                <div className='flex items-center justify-between mt-3'>
                  <p className='text-gray-600 text-base font-medium'>Total</p>
                  <p className='font-medium'>$80.00</p>
                </div>
                <p className='text-gray-600'>Paid by Cash on Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsScreen;
