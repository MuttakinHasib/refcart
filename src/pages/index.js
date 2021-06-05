import Banner from '@components/Banner';
import { Category, Feature, ProductWrapper } from '@components/Sections';
import { API_URL } from '@configs/index';

const HomeScreen = ({ products }) => {
  return (
    <>
      <Banner />
      <Feature />
      <Category />
      <ProductWrapper {...{ products }} />
    </>
  );
};
export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
export default HomeScreen;
