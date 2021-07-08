import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/outline';

const WishlistItem = () => {
  return (
    <div className='border border-gray-100 rounded p-5'>
      <div className='flex items-center justify-between gap-6 flex-wrap'>
        <div className='flex items-center gap-3'>
          <img
            src='/images/products/product1.jpg'
            alt=''
            className='w-20 object-contain'
          />
        </div>
        <div className='space-y-2'>
          <Link href={`/shop/1`}>
            <a className='text-base block font-medium text-gray-800 hover:text-primary transition'>
              Casual USB Charging Laptop Backpacks
            </a>
          </Link>
          <p className='text-sm text-gray-600'>
            Availability: <span className='text-green-500'>In Stock</span>
          </p>
        </div>
        <h2 className='text-lg font-medium text-gray-800'>$55.00</h2>
        <div className='flex items-center gap-3'>
          <button className='inline-block border border-primary px-4 py-2 text-white bg-primary hover:bg-primary/90 rounded transition duration-300'>
            Add to cart
          </button>
          <button className='focus:outline-none p-1 sm:p-4 rounded-full'>
            <TrashIcon className='w-7 text-gray-600 hover:text-primary transition duration-300' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
