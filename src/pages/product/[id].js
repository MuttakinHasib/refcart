import { BreadCrumbs, ProductColor, ProductSize } from '@components/index';

const ProductDetails = () => {
  return (
    <>
      <BreadCrumbs items={['Shop', 'Something']} />
      <div className='container grid grid-cols-2 gap-8'>
        <div>
          <img src='/images/products/product9.jpg' alt='' className='w-full' />
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <img
              src='/images/products/product1.jpg'
              alt=''
              className='w-full border cursor-pointer'
            />
            <img
              src='/images/products/product2.jpg'
              alt=''
              className='w-full border cursor-pointer'
            />
            <img
              src='/images/products/product3.jpg'
              alt=''
              className='w-full border cursor-pointer'
            />
            <img
              src='/images/products/product4.jpg'
              alt=''
              className='w-full border cursor-pointer'
            />
            <img
              src='/images/products/product5.jpg'
              alt=''
              className='w-full border cursor-pointer'
            />
          </div>
        </div>
        <div>
          <h2 className='text-3xl font-medium uppercase mb-2'>
            Italian L shape sofa
          </h2>
          <div className='flex items-center mb-4'>
            <div className='flex gap-1 text-yellow-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            </div>
            <div className='text-xs text-gray-500 ml-3'>(150 Reviews)</div>
          </div>
          <div className='space-y-2'>
            <p className='text-gray-800 font-semibold space-x-2'>
              <span>Availability:</span>
              <span className='text-green-600'>In Stock</span>
            </p>
            <p className='space-x-2'>
              <span className='text-gray-800 font-semibold'>Brand:</span>
              <span className='text-gray-600'>Apex</span>
            </p>
            <p className='space-x-2'>
              <span className='text-gray-800 font-semibold'>Category:</span>
              <span className='text-gray-600'>Sofa</span>
            </p>
            <p className='space-x-2'>
              <span className='text-gray-800 font-semibold'>SKU:</span>
              <span className='text-gray-600'>BE4TEF8</span>
            </p>
          </div>
          <div className='flex items-baseline mt-4 mb-1 space-x-2 font-roboto'>
            <p className='text-primary text-2xl font-semibold'>$44.5</p>
            <p className='text-gray-500 font-base text-sm line-through'>
              $55.3
            </p>
          </div>
          <p className='mt-4 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            voluptatum esse optio eligendi rerum blanditiis.
          </p>

          {/* Size */}
          <div className='pt-4'>
            <h2 className='text-lg text-gray-800 mb-3 uppercase font-medium'>
              Size
            </h2>
            <ProductSize />
          </div>
          {/* Color */}
          <div className='pt-4'>
            <h2 className='text-lg text-gray-800 mb-3 uppercase font-medium'>
              Color
            </h2>
            <ProductColor />
          </div>
          {/* Color End */}

          {/* Quantity */}
          <div className='py-4'>
            <h2 className='text-lg text-gray-800 mb-3 uppercase font-medium'>
              Color
            </h2>
            <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
              <button className='h-8 w-8 text-xl flex items-center justify-center select-none focus:outline-none'>
                -
              </button>
              <div className='h-8 px-2 text-base flex items-center justify-center'>
                04
              </div>
              <button className='h-8 w-8 text-xl flex items-center justify-center select-none focus:outline-none'>
                +
              </button>
            </div>
          </div>
          {/* Quantity End */}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
