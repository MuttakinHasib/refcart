import { Loader } from '@components/Shared';
import ProductItem from '@components/Shared/ProductItem';

const ProductWrapper = ({ products, isLoading }) => {
  if (isLoading) {
    return <Loader section />;
  }

  return (
    <section className='container py-16'>
      <h2 className='text-3xl text-gray-800 font-medium mb-6 uppercase'>
        Top new arrival
      </h2>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((product, index) => (
          <ProductItem key={index} {...{ product }} />
        ))}
      </div>
    </section>
  );
};

export default ProductWrapper;
