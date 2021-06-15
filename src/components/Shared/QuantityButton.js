const QuantityButton = ({ quantity, decrement, increment }) => {
  return (
    <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
      <button
        className='h-8 w-8 text-xl flex items-center justify-center select-none focus:outline-none'
        onClick={decrement}
      >
        -
      </button>
      <div className='h-8 px-2 text-base flex items-center justify-center'>
        {quantity}
      </div>
      <button
        className='h-8 w-8 text-xl flex items-center justify-center select-none focus:outline-none'
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
