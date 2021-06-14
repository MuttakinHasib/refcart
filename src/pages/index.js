import { Slider } from '@components/index';
import {
  Category,
  Feature,
  ProductWrapper,
} from '@components/HomePage/Sections';
import { API_URL } from '@configs/index';

const HomeScreen = () => {
  return (
    <>
      <Slider />
      <Feature />
      <Category />
      <ProductWrapper />
    </>
  );
};

// export const getServerSideProps = async () => {
//   const res = await fetch(`${API_URL}/products`);
//   const products = await res.json();

//   return {
//     props: {
//       products,
//     },
//   };
// };

export default HomeScreen;
