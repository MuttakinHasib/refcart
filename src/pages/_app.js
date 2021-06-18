import { Layout } from '@components/index';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Provider } from 'next-auth/client';

import '../styles/globals.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_CLIENT_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Elements stripe={stripePromise}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Elements>
    </Provider>
  );
}

export default MyApp;
