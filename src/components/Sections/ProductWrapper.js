import ProductItem from '@components/ProductItem';
import { products } from '@configs/static';

const ProductWrapper = () => {
  return (
    <section className='container py-16'>
      <h2 className='text-3xl text-gray-800 font-medium mb-6 uppercase'>
        Top new arrival
      </h2>
      <div className='grid gap-6 grid-cols-4'>
        {products.map((product, index) => (
          <ProductItem key={index} {...{ product }} />
        ))}
      </div>
    </section>
  );
};


export default ProductWrapper;
