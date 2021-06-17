import { Button } from '@components/index';

const ProfileInformationScreen = () => {
  return (
    <>
      <div className='flex items-center pb-4 mb-5 justify-between border-b border-gray-100'>
        <h2 className='text-xl capitalize text-gray-800 font-medium'>
          Profile Information
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
            <label htmlFor='dob' className='text-gray-600 mb-2 block'>
              Birthday
            </label>
            <input
              required
              type='date'
              name='dob'
              id='dob'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Enter birthday'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='gender' className='text-gray-600 mb-2 block'>
              Gender
            </label>
            <select
              name='gender'
              id='gender'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
            >
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
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
        <Button label='Save changes' submit />
      </form>
    </>
  );
};

export default ProfileInformationScreen;
