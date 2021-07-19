import { Slider } from '@components/index';
import {
  Category,
  Feature,
  ProductWrapper,
} from '@components/HomePage/Sections';
import { getAllProducts } from '@utils/api';
import { useQuery } from 'react-query';
import Head from 'next/head';

const HomeScreen = props => {
  const { data: products, isLoading } = useQuery('products', getAllProducts);

  return (
    <>
      <Head>
        <title>Refcart | Online Shopping Mall</title>
      </Head>
      <Slider />
      <Feature />
      <Category />
      <ProductWrapper {...{ products, isLoading }} />
    </>
  );
};

// export const getServerSideProps = async () => {
//   const products = await getAllProducts();

//   return {
//     props: {
//       products,
//     },
//   };
// };

export default HomeScreen;
