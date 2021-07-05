import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '@components/index';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';
import { persistor, store } from 'app/store';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_CLIENT_KEY);

export const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider {...{ client }}>
      <Provider {...{ store }}>
        <PersistGate loading={null} {...{ persistor }}>
          <Elements stripe={stripePromise}>
            <Toaster
              position='top-right'
              reverseOrder={false}
              // toastOptions={{ style: { marginTop: '4.5rem' } }}
            />
            <Layout>
              <Component {...pageProps} />
              {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
            </Layout>
          </Elements>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
