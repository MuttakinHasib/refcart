import { Button } from '@components/index';
import Link from 'next/link';

const ReturnDetailsScreen = () => {
  return (
    <>
      <h2 className='text-xl pb-4 mb-5 capitalize text-gray-800 font-medium'>
        Return Request
      </h2>
      <div className='space-y-6'>
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
            <div className='space-y-3'>
              <h2 className='text-base font-medium text-gray-800'>Quantity</h2>
              <p className='text-sm text-gray-600'>x3</p>
            </div>
            <div className='space-y-3'>
              <h2 className='text-base font-medium text-gray-800'>Total</h2>
              <p className='text-sm text-gray-600'>$12.33</p>
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
            <div>
              <label
                htmlFor='return-reason'
                className='text-gray-600 text-sm mb-1 block'
              >
                Select A Reason
              </label>
              <select
                name='return-reason'
                id='return-reason'
                className='w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary'
              >
                <option>Select A Reason</option>
                <option>Damaged</option>
                <option>Wrong/Fake Item</option>
                <option>Wrong Size</option>
                <option>Missing Accessories</option>
              </select>
            </div>
          </div>
        </div>
        <div className='border border-gray-100 rounded p-5 space-y-10'>
          <form className='space-y-6'>
            <div className='space-y-3'>
              <h3 className='text-gray-800 font-medium'>Payment Method</h3>
              <div className='flex gap-3'>
                <input
                  type='radio'
                  checked
                  name='return-payment-method'
                  id='return-payment-method'
                  className='text-primary border-primary focus:ring-0 focus:outline-none cursor-pointer'
                />
                <label
                  htmlFor='return-payment-method'
                  className='cursor-pointer -mt-1'
                >
                  Refund By Credit Card <br />
                  <span className='text-xs text-gray-600'>
                    Money will be return your Credit Card That you used for
                    purchased
                  </span>
                </label>
              </div>
            </div>
            <div className='space-y-3'>
              <h3 className='text-gray-800 font-medium'>
                Select Shipment Option
              </h3>
              <div className='flex gap-3'>
                <input
                  type='radio'
                  name='shipment'
                  id='shipment'
                  value='courier'
                  className='text-primary border-primary focus:ring-0 focus:outline-none cursor-pointer'
                />
                <label htmlFor='shipment' className='cursor-pointer -mt-1'>
                  Courier Pick Up
                </label>
              </div>
              <div className='flex gap-3'>
                <input
                  type='radio'
                  name='shipment'
                  id='shipment'
                  value='drop-off'
                  className='text-primary border-primary focus:ring-0 focus:outline-none cursor-pointer'
                />
                <label htmlFor='shipment' className='cursor-pointer -mt-1'>
                  Drop Off
                </label>
              </div>
            </div>
            <div className='w-full'>
              <label htmlFor='additional-info' className='mb-2 block'>
                Additional Information (Optional)
              </label>
              <textarea
                required
                type='text'
                name='additional-info'
                id='additional-info'
                rows='3'
                className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                placeholder='Example: wrong size'
              />
            </div>
            <div className='flex items-center'>
              <input
                className='text-primary focus:ring-0 focus:outline-none rounded-sm cursor-pointer'
                type='checkbox'
                name='read-policy'
                id='read-policy'
              />
              <label
                htmlFor='read-policy'
                className='text-gray-600 ml-3 cursor-pointer'
              >
                I have Read and accepted the{' '}
                <Link href='/return-policy'>
                  <a className='text-primary'>Return Policy</a>
                </Link>{' '}
                of RAFCART
              </label>
            </div>
            <Button label='Submit' submit />
          </form>
        </div>
      </div>
    </>
  );
};

export default ReturnDetailsScreen;
