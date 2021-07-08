const NoData = ({ title }) => {
  return (
    <div className='mt-16'>
      <img src='/images/no-data.svg' alt='' className='w-44 mx-auto' />
      <h1 className='mt-5 text-4xl text-gray-700 font-light text-center'>{title}</h1>
    </div>
  );
};

export default NoData;
