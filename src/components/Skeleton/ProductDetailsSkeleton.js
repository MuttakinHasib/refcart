import Skeleton from 'react-loading-skeleton';

const ProductDetailsSkeleton = props => (
  <>
    <div className='container py-5 flex items-center gap-3'>
      <Skeleton height={30} width={300} />
    </div>
    <div className='container grid grid-cols-1 lg:grid-cols-2 gap-8'>
      <div>
        <Skeleton height={400} width={`100%`} />
        <div className='flex items-center gap-5 flex-wrap mt-5'>
          <Skeleton height={80} width={120} />
          <Skeleton height={80} width={120} />
        </div>
      </div>
      <div>
        <div className='mb-2'>
          <Skeleton height={25} width={350} />
        </div>
        <div className='flex items-center mb-4'>
          <div className='flex gap-1 text-yellow-400'>
            <Skeleton height={18} width={150} />
            <Skeleton height={18} width={50} />
          </div>
        </div>
        <div className='space-y-2 flex flex-col'>
          <Skeleton height={15} width={180} />
          <Skeleton height={15} width={200} />
        </div>
        <div className='flex items-baseline mt-4 mb-1 space-x-2'>
          <Skeleton height={15} width={50} />
          <Skeleton height={15} width={80} />
        </div>
        <div className='flex flex-col'>
          <Skeleton height={15} width={400} />
          <Skeleton height={15} width={300} />
        </div>

        {/* Size */}
        <div className='pt-4'>
          <div className='mb-3'>
            <Skeleton height={15} width={50} />
          </div>
          <div className='flex items-center gap-5 flex-wrap mt-2'>
            <Skeleton height={20} width={20} />
            <Skeleton height={20} width={20} />
            <Skeleton height={20} width={20} />
            <Skeleton height={20} width={20} />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-3 pb-5 mt-6'>
          <Skeleton height={35} width={120} />
          <Skeleton height={35} width={120} />
        </div>
      </div>
    </div>
    <div className='container py-16'>
      <div className='border-b border-gray-200 pb-3'>
        <Skeleton height={20} width={200} />
      </div>
      <div className='w-full md:w-3/5 pt-6'>
        <div className='flex flex-col'>
          <Skeleton height={15} width={`100%`} />
          <Skeleton height={15} width={`80%`} />
          <Skeleton height={15} width={`90%`} />
          <Skeleton height={15} width={`60%`} />
        </div>
      </div>
    </div>
  </>
);

export default ProductDetailsSkeleton;
