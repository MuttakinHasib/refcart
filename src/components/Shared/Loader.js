import Spinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='fixed inset-0 w-full h-full flex items-center justify-center bg-black/50 z-20'>
      <Spinner type='Oval' color='#fff' height={80} width={80} />
    </div>
  );
};

export default Loader;
