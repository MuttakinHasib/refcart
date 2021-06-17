import { brands, categories } from '@configs/static';
import { ProductColor, ProductSize } from '../index';

const SideBar = () => {
  return (
    <div>
      <div className='divide-y divide-gray-200 space-y-5'>
        <div>
          <h2 className='text-xl text-gray-800 pt-4 mb-3 uppercase font-medium'>
            Categories
          </h2>
          <div className='space-y-2'>
            {categories.map((category, index) => (
              <div key={index} className='flex items-center'>
                <input
                  className='text-primary focus:ring-0 focus:outline-none rounded-sm cursor-pointer'
                  type='checkbox'
                  name={category.name}
                  id={index}
                />
                <label
                  htmlFor={index}
                  className='text-gray-600 ml-3 cursor-pointer'
                >
                  {category.name}
                </label>
                <div className='ml-auto text-gray-600 text-sm'>
                  ({category.items})
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-xl text-gray-800 pt-4 mb-3 uppercase font-medium'>
            Brands
          </h2>
          <div className='space-y-2'>
            {brands.map((brand, index) => (
              <div key={index + 'brand'} className='flex items-center'>
                <input
                  className='text-primary focus:ring-0 focus:outline-none rounded-sm cursor-pointer'
                  type='checkbox'
                  name={brand.name}
                  id={index + 'brand'}
                />
                <label
                  htmlFor={index + 'brand'}
                  className='text-gray-600 ml-3 cursor-pointer'
                >
                  {brand.name}
                </label>
                <div className='ml-auto text-gray-600 text-sm'>
                  ({brand.items})
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='pt-4'>
          <h2 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
            Price
          </h2>
          <div className='mt-4 flex items-center'>
            <input
              type='text'
              className='w-full border-gray-300 focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded-md'
              placeholder='Min'
            />
            <span className='mx-4'>+</span>
            <input
              type='text'
              className='w-full border-gray-300 focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded-md'
              placeholder='Max'
            />
          </div>
        </div>
        <div className='pt-4'>
          <h2 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
            Size
          </h2>
          <ProductSize />
        </div>
        <div className='pt-4'>
          <h2 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
            Color
          </h2>
          <ProductColor />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
