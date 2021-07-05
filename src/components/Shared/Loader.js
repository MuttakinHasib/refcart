import Spinner from 'react-loader-spinner';

const Loader = ({ section }) => {
  return section ? (
    <div className='w-full h-[50vh] flex flex-col items-center justify-center'>
      <Spinner type='Oval' color='#FD3D57' height={60} width={60} />
      <h3 className='mt-5 text-gray-800'>
        Redirecting to {to} page, Please Wait...
      </h3>
    </div>
  ) : (
    <div className='fixed inset-0 w-full h-full flex items-center justify-center bg-black/50 z-20'>
      <Spinner type='Oval' color='#fff' height={80} width={80} />
    </div>
  );
};

export default Loader;
