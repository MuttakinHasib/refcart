import { useRouter } from 'next/router';

const CartSummary = ({ label, submit, formId, summary, onClick }) => {
  const { pathname } = useRouter();
  return (
    <div className='border border-gray-200 p-5 rounded'>
      <h3 className='text-lg mb-4 text-gray-800 font-semibold uppercase'>
        Order summary
      </h3>
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <p className='font-medium'>Subtotal</p>
          <p className='font-medium'>${summary.subtotal}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Tax</p>
          <p>Free</p>
        </div>
      </div>
      <h2 className='mt-4 pt-4 text-2xl font-semibold border-t border-gray-200 flex items-center justify-between'>
        <span>Total</span>
        <span>${summary.total}</span>
      </h2>
      {pathname === '/cart' && (
        <div className='flex items-center mt-4'>
          <input
            type='text'
            className='focus:ring-0 border-r-0 flex-1 py-2 text-sm w-full border border-gray-200 rounded-l'
            placeholder='Enter coupon'
          />
          <button className='bg-primary text-white font-medium py-2 px-3 rounded-r uppercase'>
            Apply
          </button>
        </div>
      )}
      {label && (
        <button
          form={formId ? formId : null}
          type={submit ? 'submit' : 'button'}
          className='focus:outline-none mt-8 uppercase font-medium rounded border border-primary w-full py-2 flex items-center justify-center space-x-2 bg-primary text-white hover:text-primary hover:bg-transparent transition'
          {...{ onClick }}
        >
          {label}
        </button>
      )}
    </div>
  );
};

export default CartSummary;
