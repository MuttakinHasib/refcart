import Skeleton from 'react-loading-skeleton';

const ProductSkeleton = () => {
  return (
    <div className='bg-white my-10'>
      <div className='flex items-center justify-between space-x-5 flex-wrap px-8 py-6 border border-gray-100'>
        <Skeleton height={45} width={300} />
        <div className='flex items-center space-x-5'>
          <Skeleton height={45} width={300} />
        </div>
      </div>
      <div className='p-8 divide-y divide-gray-100'>
        {[...Array(5).keys()].map((_, index) => (
          <div
            key={index}
            className='grid grid-cols-8 items-center gap-y-5 hover:bg-gray-100 py-5'
          >
            <div className='col-span-3'>
              <div className='flex items-center space-x-3'>
                <Skeleton height={64} width={80} />
                <Skeleton height={20} width={200} />
              </div>
            </div>
            <div className='md:mx-auto'>
              <Skeleton height={10} width={150} />
            </div>
            <div className='md:mx-auto'>
              <Skeleton height={10} width={100} />
            </div>
            <div className='md:mx-auto'>
              <Skeleton height={15} width={100} />
            </div>
            <div className='md:mx-auto'>
              <Skeleton height={10} width={100} />
            </div>
            <div className='flex items-center ml-auto space-x-3'>
              <Skeleton height={35} width={50} />
              <Skeleton height={35} width={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;
