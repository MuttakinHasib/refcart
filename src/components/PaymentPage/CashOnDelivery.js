import { Button } from '@components/index';

const CashOnDelivery = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <p className='text-base font-medium text-gray-700'>Cash on Delivery</p>
        <img src='/images/icons/cash-on.png' alt='' />
      </div>
      <div className='text-center w-3/4 mx-auto text-gray-600 my-6'>
        you can pay in cash to our courier when you receive the goods at your
        doorstep.
      </div>
      <div className='text-center pb-4'>
        <Button label='Confirm order' />
      </div>
    </>
  );
};

export default CashOnDelivery;
