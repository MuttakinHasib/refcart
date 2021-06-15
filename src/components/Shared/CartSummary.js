import Button from './Button';

const CartSummary = () => {
  return (
    <div className='border border-gray-200 p-5 rounded'>
      <h3 className='text-lg mb-4 text-gray-800 font-semibold uppercase'>
        Order summary
      </h3>
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <p className='font-medium'>Subtotal</p>
          <p className='font-medium'>$45.00</p>
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
      <h2 className='my-4 pt-4 text-2xl font-semibold border-t border-gray-200 flex items-center justify-between'>
        <span>Total</span>
        <span>$45.00</span>
      </h2>
      <div className='flex items-center mb-8'>
        <input
          type='text'
          className='flex-1 py-2 text-sm w-full border border-gray-200 rounded-l'
          placeholder='Enter coupon'
        />
        <button className='bg-primary text-white font-medium py-2 px-3 rounded-r uppercase'>
          Apply
        </button>
      </div>
      <button className='focus:outline-none uppercase font-medium rounded border border-primary w-full py-2 flex items-center justify-center space-x-2 bg-primary text-white hover:text-primary hover:bg-transparent transition'>
        Process to checkout
      </button>
    </div>
  );
};

export default CartSummary;
