const ProductColor = ({ colors }) => {
  return (
    <div className='flex items-center gap-2'>
      {colors.map(({ label }, index) => (
        <div key={index} className='color-selector'>
          <input
            type='radio'
            name='color'
            id={`color-${label}`}
            className='hidden'
          />
          <label
            htmlFor={`color-${label}`}
            className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer`}
            style={{ backgroundColor: `${label}` }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductColor;
