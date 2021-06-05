import Banner from '@components/Banner';
import { Category, Feature, ProductWrapper } from '@components/Sections';

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
  const res = await fetch('http://localhost:1337/products');
  const products = await res.json();

  return {
    props: {
      products
    },
  };
};
export default HomeScreen;
