import { brands, categories } from '@configs/static';

const SideBar = () => {
  return (
    <div className='col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden'>
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
              <div key={index} className='flex items-center'>
                <input
                  className='text-primary focus:ring-0 focus:outline-none rounded-sm cursor-pointer'
                  type='checkbox'
                  name={brand.name}
                  id={index}
                />
                <label
                  htmlFor={index}
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
      </div>
    </div>
  );
};

export default SideBar;
