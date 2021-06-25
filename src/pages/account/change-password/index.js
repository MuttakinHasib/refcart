import { Button } from '@components/index';
import { attemptPasswordResetRequest } from '@features/user/userActions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const ChangePasswordScreen = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();

  // Handle submit
  const onSubmit = async data => {
    try {
      dispatch(attemptPasswordResetRequest({ ...data, alreadyLoggedIn: true }));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h2 className='text-xl pb-4 mb-5 border-b border-gray-100 capitalize text-gray-800 font-medium'>
        Reset Password Request
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='max-w-md space-y-5'>
          <div className='w-full'>
            <label htmlFor='email' className='text-gray-600 mb-2 block'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='example@gmail.com'
              required
              {...register('email', { required: true })}
            />
          </div>
          <Button label='Reset' submit />
        </div>
      </form>
    </>
  );
};

export default ChangePasswordScreen;
