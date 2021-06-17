import Link from 'next/link';

const OrderItem = ({ order }) => {
  return (
    <div className='border border-gray-100 p-6 grid grid-cols-4 gap-6'>
      <div className='col-span-3'>
        <div className='flex items-center gap-3'>
          <img
            src='/images/products/product1.jpg'
            alt=''
            className='w-20 object-contain'
          />
        </div>
      </div>
      <div className='ml-auto'>
        <Link href={`/account/orders/1`}>
          <a className='inline-block border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white rounded transition duration-300'>
            View Order
          </a>
        </Link>
      </div>
      {/* div */}
    </div>
  );
};

export default OrderItem;
