import Link from 'next/link';

const ReturnItem = () => {
  return (
    <div className='border border-gray-100 rounded p-5'>
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
          <h2 className='text-base font-medium text-gray-800'>Order Number</h2>
          <p className='text-sm text-gray-600'>2D5S6SEF22</p>
        </div>
        <div className='space-y-3'>
          <h2 className='text-base font-medium text-gray-800'>Total</h2>
          <p className='text-sm text-gray-600'>$55.00</p>
        </div>
        <div className='space-y-3'>
          <h2 className='text-base font-medium text-gray-800'>Return Status</h2>
          <p className='text-sm text-green-500'>Successful</p>
        </div>
        <div>
          <Link href={`/account/returns/1`}>
            <a className='inline-block border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white rounded transition duration-300'>
              View Details
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReturnItem;
