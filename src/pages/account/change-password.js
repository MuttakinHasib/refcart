import { Button } from '@components/index';

const ChangePasswordScreen = () => {
  return (
    <>
      <h2 className='text-xl pb-4 mb-5 border-b border-gray-100 capitalize text-gray-800 font-medium'>
        Change Password
      </h2>
      <form>
        <div className='max-w-md space-y-5'>
          <div className='w-full'>
            <label htmlFor='password' className='text-gray-600 mb-2 block'>
              Current password
            </label>
            <input
              required
              type='password'
              name='password'
              id='password'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Current password'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='newPassword' className='text-gray-600 mb-2 block'>
              New Password
            </label>
            <input
              required
              type='password'
              name='newPassword'
              id='newPassword'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Enter new password'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='cp' className='text-gray-600 mb-2 block'>
              Retype password
            </label>
            <input
              required
              type='password'
              name='cp'
              id='cp'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Repeat your password'
            />
          </div>
          <Button label='Save changes' submit />
        </div>
      </form>
    </>
  );
};

export default ChangePasswordScreen;
