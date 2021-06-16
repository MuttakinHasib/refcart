import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_CLIENT_KEY);

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
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
};

export default CardPayment;
