import Link from 'next/link';
import Rating from 'react-rating';
import { Button, SectionTitle } from '@components/index';
import { StarIcon } from '@heroicons/react/solid';

const ReviewDetailsScreen = () => {
  return (
    <>
      <SectionTitle label='Write Review' />
      <form className='space-y-6 max-w-xl'>
        <div className='flex items-center justify-between gap-3 flex-wrap'>
          <div className='flex items-center gap-4'>
            <img
              src='/images/products/product1.jpg'
              alt=''
              className='w-20 object-contain'
            />
            <div className='space-y-2'>
              <Link href={`/product/1`}>
                <a className='text-base block font-medium text-gray-800 hover:text-primary transition'>
                  Xbox One Wireless Control
                </a>
              </Link>
              <p className='text-gray-600 text-xs'>No Warranty Available</p>
            </div>
          </div>
          <div className='space-y-2'>
            <h2 className='text-base font-medium text-gray-800'>Purchased</h2>
            <p className='text-sm text-gray-600'>16 Dec 2020</p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-3 flex-wrap'>
          <div className='space-y-2'>
            <h2 className='text-base font-medium text-gray-800'>
              Rate and review your product
            </h2>
            <Rating
              initialRating={3}
              emptySymbol={<StarIcon className='w-5 text-gray-500' />}
              fullSymbol={<StarIcon className='w-5 text-yellow-500' />}
            />
          </div>
          <div className='space-y-2'>
            <h2 className='text-base font-medium text-gray-800'>
              Rate and review your seller
            </h2>
            <div className='flex justify-end'>
              <Rating
                initialRating={3}
                emptySymbol={<StarIcon className='w-5 text-gray-500' />}
                fullSymbol={<StarIcon className='w-5 text-yellow-500' />}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-between gap-3 flex-wrap'>
          <div className='w-full'>
            <label
              htmlFor='comment'
              className='text-base font-medium text-gray-800 mb-2 block'
            >
              Review Details
            </label>
            <textarea
              required
              type='text'
              name='comment'
              id='comment'
              rows='3'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Please share your feedback about the product: Was the product as described? What is the quality like?'
            />
          </div>
        </div>
        <Button label='Submit' submit />
      </form>
    </>
  );
};

export default ReviewDetailsScreen;
