const SectionTitle = ({ title, subtitle, right }) => {
  return (
    <div className='flex justify-between items-center gap-3 flex-wrap'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-medium text-gray-700'>{title}</h1>
        <p className='text-sm text-gray-500'>{subtitle}</p>
      </div>
      {right}
    </div>
  );
};

export default SectionTitle;
