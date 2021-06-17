import { Button } from '@components/index';

const ManageAddressScreen = () => {
  return (
    <>
      <div className='flex items-center pb-4 mb-5 justify-between border-b border-gray-100'>
        <h2 className='text-xl capitalize text-gray-800 font-medium'>
          Manage Address
        </h2>
        <button className='py-2 px-4 bg-primary text-white'>Edit</button>
      </div>
      <form action='' className='space-y-5'>
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
            <label htmlFor='phone' className='text-gray-600 mb-2 block'>
              Phone
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
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='country' className='text-gray-600 mb-2 block'>
              Country
            </label>
            <select
              name='country'
              id='country'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
            >
              <option>Select country</option>
              <option>Bangladesh</option>
              <option>India</option>
            </select>
          </div>
          <div className='w-full'>
            <label htmlFor='region' className='text-gray-600 mb-2 block'>
              Region
            </label>
            <select
              name='region'
              id='region'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
            >
              <option>Select region</option>
              <option>Dhaka</option>
              <option>Comilla</option>
              <option>Khulna</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='city' className='text-gray-600 mb-2 block'>
              City
            </label>
            <select
              name='city'
              id='city'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
            >
              <option>Select city</option>
              <option>Dhaka North</option>
              <option>Dhaka South</option>
              <option>Badda</option>
            </select>
          </div>
          <div className='w-full'>
            <label htmlFor='area' className='text-gray-600 mb-2 block'>
              Area
            </label>
            <select
              name='area'
              id='area'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
            >
              <option>Select area</option>
              <option>Mirpur</option>
              <option>Gulshan</option>
              <option>Notun Bazar</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='phone' className='text-gray-600 mb-2 block'>
              Phone
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
          <div className='w-full'>
            <label htmlFor='country' className='text-gray-600 mb-2 block'>
              Country
            </label>
            <select
              name='country'
              id='country'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
            >
              <option>Select country</option>
              <option>Bangladesh</option>
              <option>India</option>
            </select>
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
        <Button label='Save change' submit />
      </form>
    </>
  );
};

export default ManageAddressScreen;
