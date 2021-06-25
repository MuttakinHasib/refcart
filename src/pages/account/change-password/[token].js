import { BreadCrumbs, Button } from '@components/index';
import { attemptChangePassword } from '@features/user/userActions';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const ChangePasswordScreen = () => {
  const dispatch = useDispatch();
  const { query, push } = useRouter();
  const { handleSubmit, register } = useForm();

  const token = query.token;

  // Handle submit
  const onSubmit = async data => {
    try {
      if (data.newPassword === data.cPassword) {
        dispatch(attemptChangePassword({ token, ...data }));
        push('/login');
      } else {
        toast.error('Password are not matching');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h2 className='text-2xl uppercase font-semibold mb-1'>Change password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-4'>
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
              {...register('newPassword', { required: true })}
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
              {...register('cPassword', { required: true })}
            />
          </div>
          <Button label='Save changes' submit />
        </div>
      </form>
    </>
  );
};

export default ChangePasswordScreen;
