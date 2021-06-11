const ProductSize = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='size-selector'>
        <input type='radio' name='size' id='size-xs' className='hidden' />
        <label
          htmlFor='size-xs'
          className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer'
        >
          XS
        </label>
      </div>
      <div className='size-selector'>
        <input type='radio' name='size' id='size-sm' className='hidden' />
        <label
          htmlFor='size-sm'
          className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer'
        >
          S
        </label>
      </div>
      <div className='size-selector'>
        <input type='radio' name='size' id='size-m' className='hidden' />
        <label
          htmlFor='size-m'
          className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer'
        >
          M
        </label>
      </div>
      <div className='size-selector'>
        <input type='radio' name='size' id='size-l' className='hidden' />
        <label
          htmlFor='size-l'
          className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer'
        >
          L
        </label>
      </div>
      <div className='size-selector'>
        <input type='radio' name='size' id='size-xl' className='hidden' />
        <label
          htmlFor='size-xl'
          className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer'
        >
          XL
        </label>
      </div>
    </div>
  );
};

export default ProductSize;
