import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '@components/index';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Provider as AuthProvider } from 'next-auth/client';

import '../styles/globals.css';
import { persistor, store } from 'app/store';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_CLIENT_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} {...{ persistor }}>
        <AuthProvider session={pageProps.session}>
          <Elements stripe={stripePromise}>
            <Toaster
              position='top-right'
              reverseOrder={false}
              // toastOptions={{ style: { marginTop: '4.5rem' } }}
            />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Elements>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
