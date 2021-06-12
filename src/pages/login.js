import Link from 'next/link';

const LoginScreen = () => {
  return (
    <div className='container py-16'>
      <div className='max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden'>
        <h2 className='text-2xl uppercase font-semibold mb-1'>Login</h2>
        <p className='text-gray-600 mb-6 text-sm'>
          Login if you are a returning customer
        </p>
        <form action=''>
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
                placeholder='Enter your email address'
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
                placeholder='Enter your password'
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
              />
              <label
                htmlFor='remember'
                className='text-gray-600 cursor-pointer'
              >
                Remember me
              </label>
            </div>
            <Link href='/forget-password'>
              <a className='text-primary'>Forget password</a>
            </Link>
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              className='w-full block focus:outline-none py-2 text-center bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded transition uppercase font-medium shadow-lg'
            >
              Login
            </button>
          </div>
        </form>
        {/* <div className='mt-6 flex justify-center relative'>
          <div className='text-gray-600 px-3 bg-white z-10 relative'>
            Or login with
          </div>
          <div className='absolute w-full left-0 top-3 border-b-2 border-gray-200' />
        </div> */}
        <p className='mt-6 text-gray-600 text-center'>
          Don't have an account?{' '}
          <Link href='/register'>
            <a className='text-primary'>Register now</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
