import { OrderItem } from '@components/index';

const OrderHistoryScreen = () => {
  return (
    <>
      <h2 className='text-xl pb-4 mb-5 capitalize text-gray-800 font-medium'>
        Order History
      </h2>
      <div className='space-y-6'>
        <OrderItem />
        <OrderItem />
      </div>
    </>
  );
};

export default OrderHistoryScreen;
