import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='image' content='/images/seo_image.png' />
          <meta property='og:title' content='Refcart | Online Shopping Mall' />
          <meta
            name='google-site-verification'
            content='LUBT9DCkD_bj06Z0b5imXXQiZXiwadd3gYjzqN9yDy8'
          />
          <meta
            name='description'
            content='Refcart is an e-commerce site which will be capable of providing every kind of goods and products from every sector to every consumer located in Bangladesh.'
          />
          <meta
            property='og:description'
            content='Refcart is an e-commerce site which will be capable of providing every kind of goods and products from every sector to every consumer located in Bangladesh.'
          />
          <meta property='og:image' content='/images/seo_image.png' />
          <meta property='og:url' content='https://refcart.vercel.app/' />
          <meta property='og:type' content='website' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@MuttakinHasib' />
          <meta name='twitter:title' content='Refcart | Online Shopping Mall' />
          <meta
            name='twitter:description'
            content='Refcart is an e-commerce site which will be capable of providing every kind of goods and products from every sector to every consumer located in Bangladesh.'
          />
          <meta name='twitter:image' content='/images/seo_image.png' />

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap'
            rel='stylesheet'
          />
          <title>Refcart | Online Shopping Mall</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
