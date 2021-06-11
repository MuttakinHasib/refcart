const ProductColor = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='color-selector'>
        <input type='radio' name='color' id='color-red' className='hidden' />
        <label
          htmlFor='color-red'
          className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer bg-primary'
        />
      </div>
      <div className='color-selector'>
        <input type='radio' name='color' id='color-white' className='hidden' />
        <label
          htmlFor='color-white'
          className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer bg-white'
        />
      </div>
      <div className='color-selector'>
        <input type='radio' name='color' id='color-black' className='hidden' />
        <label
          htmlFor='color-black'
          className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer bg-black'
        />
      </div>
    </div>
  );
};

export default ProductColor;
