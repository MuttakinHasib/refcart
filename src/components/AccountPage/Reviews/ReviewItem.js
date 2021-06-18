import { StarIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Rating from 'react-rating';

const ReviewItem = () => {
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
          <Link href={`/product/1`}>
            <a className='text-base block font-medium text-gray-800 hover:text-primary transition'>
              Xbox One Wireless Control
            </a>
          </Link>
          <p className='text-sm text-gray-600'>
            <Rating
              readonly
              initialRating={3}
              emptySymbol={<StarIcon className='w-5 text-gray-500' />}
              fullSymbol={<StarIcon className='w-5 text-yellow-500' />}
            />
          </p>
        </div>
        <div className='space-y-2'>
          <h2 className='text-base font-medium text-gray-800'>Order Number</h2>
          <p className='text-sm text-gray-600'>2D5S6SEF22</p>
        </div>

        <div className='space-y-2'>
          <h2 className='text-base font-medium text-gray-800'>Purchased</h2>
          <p className='text-sm text-gray-600'>16 Dec 2020</p>
        </div>
        <div>
          <Link href={`/account/reviews/1`}>
            <a className='inline-block border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white rounded transition duration-300'>
              Write Review
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
