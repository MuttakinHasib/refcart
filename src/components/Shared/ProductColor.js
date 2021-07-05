const ProductColor = ({ colors }) => {
  return (
    <div className='flex items-center gap-2'>
      {colors.map((color, index) => (
        <div key={index} className='color-selector'>
          <input
            type='radio'
            name='color'
            id={`color-${color}`}
            className='hidden'
          />
          <label
            htmlFor={`color-${color}`}
            className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center shadow-sm cursor-pointer`}
            style={{ backgroundColor: `${color}` }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductColor;
