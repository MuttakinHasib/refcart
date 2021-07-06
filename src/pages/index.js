import { Loader, Slider } from '@components/index';
import {
  Category,
  Feature,
  ProductWrapper,
} from '@components/HomePage/Sections';
import { getAllProducts } from '@utils/api';
import { useQuery } from 'react-query';

const HomeScreen = props => {
  const { data: products, isLoading } = useQuery('products', getAllProducts);
  // const { data: products, isLoading } = useQuery('products', getAllProducts, {
  //   initialData: props.products,
  // });
  if (isLoading) {
    return <Loader section />;
  }
  return (
    <>
      <Slider />
      <Feature />
      <Category />
      <ProductWrapper {...{ products }} />
    </>
  );
};

// export const getServerSideProps = async () => {
//   const products = await getAllProducts();
//   console.log(products);
//   return {
//     props: {
//       products,
//     },
//   };
// };

export default HomeScreen;
