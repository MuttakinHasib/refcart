import { BreadCrumbs, CartSummary } from '@components/index';

const ShippingScreen = () => {
  return (
    <>
      <BreadCrumbs items={[{ title: 'Cart', href: '/cart' }, 'Shipping']} />
      <div className='container grid lg:grid-cols-10 gap-10 pb-16'>
        <div className='lg:col-span-7'>
          <form id='shipping' className='space-y-5'>
            <div className='flex flex-col md:flex-row items-center gap-5'>
              <div className='w-full'>
                <label htmlFor='name' className='text-gray-600 mb-2 block'>
                  Name
                </label>
                <input
                  required
                  type='text'
                  name='name'
                  id='name'
                  className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                  placeholder='Enter full name'
                />
              </div>
              <div className='w-full'>
                <label htmlFor='email' className='text-gray-600 mb-2 block'>
                  Email Address
                </label>
                <input
                  required
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                  placeholder='example@mail.com'
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-5'>
              <div className='w-full'>
                <label htmlFor='company' className='text-gray-600 mb-2 block'>
                  Company Name
                </label>
                <input
                  type='text'
                  name='company'
                  id='company'
                  className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                  placeholder='Enter company name'
                />
              </div>
              <div className='w-full'>
                <label htmlFor='phone' className='text-gray-600 mb-2 block'>
                  Phone Number
                </label>
                <input
                  required
                  type='text'
                  name='phone'
                  id='phone'
                  className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                  placeholder='Enter phone number'
                />
              </div>
            </div>
            <div className='w-full'>
              <label htmlFor='country' className='text-gray-600 mb-2 block'>
                Address
              </label>
              <textarea
                required
                type='text'
                name='country'
                id='country'
                rows='5'
                className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                placeholder='Enter your address'
              />
            </div>
            <div className='flex flex-col md:flex-row items-center gap-5'>
              <div className='w-full'>
                <label htmlFor='country' className='text-gray-600 mb-2 block'>
                  Country / Region
                </label>
                <input
                  required
                  type='text'
                  name='country'
                  id='country'
                  className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                  placeholder='Enter country/region'
                />
              </div>
              <div className='w-full'>
                <label htmlFor='city' className='text-gray-600 mb-2 block'>
                  City / Town
                </label>
                <input
                  required
                  type='text'
                  name='city'
                  id='city'
                  className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                  placeholder='Enter city/town'
                />
              </div>
              <div className='w-full'>
                <label htmlFor='postcode' className='text-gray-600 mb-2 block'>
                  Zip Code
                </label>
                <input
                  required
                  type='text'
                  name='postcode'
                  id='postcode'
                  className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                  placeholder='Enter zip code'
                />
              </div>
            </div>
          </form>
        </div>
        <div className='lg:col-span-3'>
          <CartSummary
            label='Place order'
            formId='shipping'
            summary={{ subtotal: 45.0, total: 45.0 }}
            submit
          />
        </div>
      </div>
    </>
  );
};

export default ShippingScreen;
