import { Layout } from '@components/index';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import '../styles/globals.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_CLIENT_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <Elements stripe={stripePromise}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Elements>
  );
}

export default MyApp;
