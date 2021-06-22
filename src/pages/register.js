import Link from 'next/link';
import { signIn } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { attemptSignup } from '@features/auth/authActions';
import { useSelector } from 'react-redux';
import { Loader } from '@components/index';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { loading, success, message } = useSelector(state => state.auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    if (data.password === data.confirmPassword) {
      dispatch(attemptSignup(data));
    }
  };

  return (
    <div className='container py-16'>
      {loading && <Loader />}
      <div className='max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden'>
        <h2 className='text-2xl uppercase font-semibold mb-1'>
          Create an account
        </h2>
        <p className='text-gray-600 mb-6 text-sm'>
          Register here if you are a new customer.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='text-gray-600 mb-2 block'>
                Full name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                placeholder='Jone Doe'
                {...register('name', { required: true })}
              />
            </div>
            <div>
              <label htmlFor='email' className='text-gray-600 mb-2 block'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                placeholder='example@mail.com'
                {...register('email', { required: true })}
              />
            </div>
            <div>
              <label htmlFor='password' className='text-gray-600 mb-2 block'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                placeholder='Type password'
                {...register('password', { required: true, minLength: 6 })}
              />
            </div>
            <div>
              <label
                htmlFor='confirmPassword'
                className='text-gray-600 mb-2 block'
              >
                Confirm Password
              </label>
              <input
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
                placeholder='Confirm your password'
                {...register('confirmPassword', {
                  required: true,
                  minLength: 6,
                })}
              />
            </div>
          </div>
          <div className='flex items-center justify-between mt-6'>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='remember'
                id='remember'
                className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                {...register('remember')}
              />
              <label
                htmlFor='remember'
                className='text-gray-600 cursor-pointer'
              >
                Remember me
              </label>
            </div>
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              className='w-full block focus:outline-none py-2 text-center bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded transition uppercase font-medium shadow-lg'
            >
              Create Account
            </button>
          </div>
        </form>
        <div className='mt-6 flex justify-center relative'>
          <div className='text-gray-600 px-3 bg-white z-10 relative'>
            Or register with
          </div>
          <div className='absolute w-full left-0 top-3 border-b-2 border-gray-200' />
        </div>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
          <button
            className='w-full focus:outline-none flex justify-center items-center gap-2 px-5 py-2 border-2 hover:bg-gray-50 text-gray-600 border-gray-100 rounded-md transition-colors duration-300'
            onClick={() => signIn('google')}
          >
            <img
              className='w-7'
              src='https://img.icons8.com/fluent/48/000000/google-logo.png'
            />
            <span>Google</span>
          </button>
          <button
            className='w-full focus:outline-none flex justify-center items-center gap-2 px-5 py-2 border-2 hover:bg-gray-50 text-gray-600 border-gray-100 rounded-md transition-colors duration-300'
            onClick={() => signIn('facebook')}
          >
            <img
              className='w-7'
              src='https://img.icons8.com/fluent/48/000000/facebook-new.png'
            />
            <span>Facebook</span>
          </button>
        </div>
        <p className='mt-6 text-gray-600 text-center'>
          Already have an account?{' '}
          <Link href='/login'>
            <a className='text-primary'>Login here</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
