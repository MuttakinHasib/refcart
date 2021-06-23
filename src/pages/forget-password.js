import { BreadCrumbs, Loader } from '@components/index';
import { attemptPasswordResetRequest } from '@features/user/userActions';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const ForgetPasswordScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.user);
  const { handleSubmit, register } = useForm();

  // Handle submit
  const onSubmit = async data => {
    try {
      dispatch(attemptPasswordResetRequest(data));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <BreadCrumbs items={['Forget password']} />
      <div className='container py-16'>
        <div className='max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden'>
          <h2 className='text-2xl uppercase font-semibold mb-1'>
            Reset password
          </h2>
          <p className='text-gray-600 mb-6 text-sm'>
            Please enter your email address below to receive a link.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-4'>
              <div>
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
            </div>
            <div className='mt-4'>
              <button
                type='submit'
                className='w-full block focus:outline-none py-2 text-center bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded transition uppercase font-medium shadow-lg'
              >
                Reset my password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordScreen;
