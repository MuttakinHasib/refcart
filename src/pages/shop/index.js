import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useMediaQuery } from '@react-hook/media-query';
import { BreadCrumbs, Loader, ProductItem, SideBar } from '@components/index';
import { useQuery } from 'react-query';
import { getAllProducts } from '@utils/api';

const ShopScreen = props => {
  const { data: products, isLoading } = useQuery('products', getAllProducts, {
    initialData: props.products,
  });
  const isLargeDevice = useMediaQuery('only screen and (min-width: 992px)');
  const [isOpen, setIsOpen] = useState(isLargeDevice);

  if (isLoading) {
    return <Loader section />;
  }

  return (
    <>
      <BreadCrumbs items={['Shop']} />
      <div className='relative container grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4 pb-16 items-start'>
        <Transition
          appear={true}
          show={isOpen}
          as='div'
          enter='transition-opacity duration-500 ease-transition'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-500 ease-transition'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className={`lg:col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden ${
            !isLargeDevice
              ? 'max-w-[300px] absolute z-10 top-20 left-[15px]'
              : ''
          }`}
        >
          <SideBar />
        </Transition>
        <div className='col-span-4 lg:col-span-3'>
          <div className='flex items-center mb-4'>
            <div className='flex items-center gap-4'>
              <button
                onClick={() => setIsOpen(prev => !prev)}
                className='lg:hidden inline-block min-w-[100px] focus:outline-none py-3 px-4 bg-primary text-white rounded'
              >
                Filter
              </button>
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
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {products.map((product, index) => (
              <ProductItem key={index} {...{ product }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
};

export default ShopScreen;
