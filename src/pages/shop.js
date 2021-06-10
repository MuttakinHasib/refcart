import { BreadCrumbs, ProductItem, SideBar } from '@components/index';
import { products } from '@configs/static';

const ShopScreen = () => {
  return (
    <>
      <BreadCrumbs items={['Shop']} />
      <div className='container grid grid-cols-4 gap-6 pt-4 pb-16 items-start'>
        <SideBar />
        <div className='col-span-3'>
          <div className='flex items-center mb-4'>
            <select
              name=''
              id=''
              className='w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary'
            >
              <option>Default sorting</option>
              <option>Price low-high</option>
              <option>Price high-low</option>
              <option>Latest product</option>
            </select>
          </div>
          <div className='grid grid-cols-3 gap-6'>
            {products.map((product, index) => (
              <ProductItem key={index} {...{ product }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopScreen;
