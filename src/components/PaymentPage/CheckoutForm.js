import { Button } from '@components/Shared';
import { useMediaQuery } from '@react-hook/media-query';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState } from 'react';

const CheckoutForm = () => {
  const isMediumDevice = useMediaQuery('only screen and (max-width: 768px)');

  const style = { base: { fontSize: isMediumDevice ? '14px' : '18px' } };
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    // setPaid(true);
    if (error) {
      setClicked(false);
      setLoading(false);
      console.log(error);
    } else {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post('/api/charge', { id, amount: 4567 });
        console.log(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{ style }}
        hidePostalCode={true}
        className='border border-gray-300 border-dashed px-4 py-3 mb-4 rounded'
      />
      <Button
        label='Pay now'
        submit
        {...{ loading }}
        disabled={clicked || !stripe}
        onClick={() => setClicked(true)}
      />
    </form>
  );
};

export default CheckoutForm;
