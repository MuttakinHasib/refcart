import CheckoutForm from './CheckoutForm';

const CardPayment = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <p className='text-base font-medium text-gray-700'>Credit Card</p>
        <div className='flex items-center gap-1 md:gap-3 h-11'>
          <img className='h-full' src='/images/icons/payment-visa.png' alt='' />
          <img
            className='h-full'
            src='/images/icons/payment-master.png'
            alt=''
          />
          <img
            className='h-full'
            src='/images/icons/payment-express.png'
            alt=''
          />
        </div>
      </div>
      <div className='mt-6'>
        <CheckoutForm />
      </div>
    </>
  );
};

export default CardPayment;
