import { useState } from 'react';
import { BreadCrumbs, Button, CartSummary } from '@components/index';
import { CheckCircleIcon } from '@heroicons/react/solid';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  return (
    <>
      <BreadCrumbs
        items={[
          { title: 'Cart', href: '/cart' },
          { title: 'Shipping', href: '/shipping' },
          'Payment',
        ]}
      />
      <div className='container grid lg:grid-cols-10 gap-10 pb-16'>
        <div className='lg:col-span-7'>
          <h2 className='text-xl px-5 py-2 border border-gray-100 rounded text-gray-800 font-medium'>
            Select payment method
          </h2>

          <div className='flex items-center gap-8 my-10'>
            <div className='payment-method'>
              <input
                type='radio'
                name='payment'
                id='credit'
                value='credit'
                className='hidden'
                checked={paymentMethod === 'credit'}
                onChange={e => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor='credit'
                className='border cursor-pointer border-primary rounded w-40 h-[105px] flex flex-col items-center justify-center gap-1 relative'
              >
                <img
                  src='/images/icons/credit-card.png'
                  alt=''
                  className='mx-auto'
                />
                <p className='text-gray-700 text-base text-center font-medium'>
                  Credit Card
                </p>
                <div className='check bg-white absolute top-[-10px] right-[-10px] text-primary'>
                  <CheckCircleIcon className='w-6 h-6' />
                </div>
              </label>
            </div>
            <div className='payment-method'>
              <input
                type='radio'
                name='payment'
                id='cod'
                value='cod'
                className='hidden'
                checked={paymentMethod === 'cod'}
                onChange={e => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor='cod'
                className='border cursor-pointer border-primary rounded w-40 h-[105px] flex flex-col items-center justify-center gap-1 relative'
              >
                <img
                  src='/images/icons/cash-on.png'
                  alt=''
                  className='mx-auto'
                />
                <p className='text-gray-700 text-sm text-center font-medium'>
                  Cash on Delivery
                </p>
                <div className='check bg-white absolute top-[-10px] right-[-10px] text-primary'>
                  <CheckCircleIcon className='w-6 h-6' />
                </div>
              </label>
            </div>
          </div>
          <div className='max-w-2xl shadow-box py-6 px-10'>
            {paymentMethod === 'cod' && (
              <>
                <div className='flex items-center justify-between'>
                  <p className='text-base font-medium text-gray-700'>
                    Cash on Delivery
                  </p>
                  <img src='/images/icons/cash-on.png' alt='' />
                </div>
                <div className='text-center w-3/4 mx-auto text-gray-600 my-6'>
                  you can pay in cash to our courier when you receive the goods
                  at your doorstep.
                </div>
                <div className='text-center pb-4'>
                  <Button label='Confirm order' />
                </div>
              </>
            )}
          </div>
        </div>
        <div className='lg:col-span-3'>
          <CartSummary summary={{ subtotal: 45.0, total: 45.0 }} />
        </div>
      </div>
    </>
  );
};

export default PaymentScreen;
