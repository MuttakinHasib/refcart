const ProductSize = ({ sizes }) => {
  return (
    <div className='flex items-center gap-2'>
      {sizes.map(({ label }, index) => (
        <div key={index} className='size-selector'>
          <input
            type='radio'
            name='size'
            id={`size-${label}`}
            className='hidden'
          />
          <label
            htmlFor={`size-${label}`}
            className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer'
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductSize;
