import Skeleton from 'react-loading-skeleton';

const DashboardSkeleton = () => {
  return (
    <div className='grid grid-cols-4 gap-10 my-10'>
      {/* All users */}
      {[...Array(4).keys()].map((_, index) => (
        <div
          key={index}
          className='bg-white border-2 border-gray-100 p-5 flex items center space-x-5 rounded-md'
        >
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-gray-100'>
            <Skeleton />
          </div>
          <div>
            <div>
              <Skeleton width={150} height={20} />
            </div>
            <Skeleton width={50} height={22} />
            <div className='mt-3'>
              <Skeleton width={200} height={10} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardSkeleton;
