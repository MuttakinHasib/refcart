import Skeleton from 'react-loading-skeleton';

const SectionTitleSkeleton = () => {
  return (
    <div className='flex justify-between items-center gap-3 flex-wrap'>
      <div className='space-y-2 flex flex-col'>
        <Skeleton width={150} height={35} />
        <Skeleton width={200} height={10} />
      </div>
      <Skeleton width={150} height={35} />
    </div>
  );
};

export default SectionTitleSkeleton;
