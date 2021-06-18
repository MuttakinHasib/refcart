import { ReturnItem } from '@components/index';

const ReturnsScreen = () => {
  return (
    <>
      <h2 className='text-xl pb-4 mb-5 capitalize text-gray-800 font-medium'>
        Returns
      </h2>
      <div className='space-y-6'>
        <ReturnItem />
        <ReturnItem />
      </div>
    </>
  );
};

export default ReturnsScreen;
