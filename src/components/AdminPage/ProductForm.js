import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

const customStyles = {
  control: (
    { borderColor, backgroundColor, boxShadow, ...provided },
    { theme }
  ) => ({
    ...provided,
    width: '100%',
    backgroundColor: 'rgba(243, 244, 246, 1)',
    borderColor: theme.colors.neutral0,
    '&:hover': {
      borderColor: theme.colors.neutral70,
    },
  }),
  valueContainer: style => ({
    ...style,
    padding: '6px 16px',
  }),
  placeholder: style => ({
    ...style,
    color: 'rgba(156, 163, 175, 1)',
    fontSize: '14px',
  }),
  input: style => ({
    ...style,
    outline: 'none',
    border: 'none',
  }),
};

const ProductForm = ({ formId, onFormSubmit, defaultValues }) => {
  const { handleSubmit, register } = useForm({ defaultValues });
  const [brand, setBrand] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (defaultValues) {
      setBrand(defaultValues.brand);
      setColors(prev => [...prev, ...defaultValues.colors]);
      setSizes(prev => [...prev, ...defaultValues.sizes]);
      setCategory(prev => [...prev, ...defaultValues.category]);
      if (colors.length || sizes.length || category.length) {
        setColors([...new Set(colors)]);
        setSizes([...new Set(sizes)]);
        setCategory([...new Set(category)]);
      }
    }
  }, [defaultValues]);

  const handleBrandChange = (newValue, actionMeta) => {
    if (newValue) {
      setBrand(newValue);
    }
    if (actionMeta.action === 'clear') {
      setBrand(null);
    }
  };
  const handleSizesChange = (newValue, actionMeta) => {
    if (actionMeta.action === 'clear') {
      setSizes([]);
    } else if (
      actionMeta.action === 'remove-value' ||
      actionMeta.action === 'pop-value'
    ) {
      setSizes(_ =>
        sizes.filter(size => size.label !== actionMeta.removedValue.label)
      );
    } else {
      setSizes([...new Set([...sizes, ...newValue])]);
    }
  };
  const handleColorsChange = (newValue, actionMeta) => {
    if (actionMeta.action === 'clear') {
      setColors([]);
    } else if (
      actionMeta.action === 'remove-value' ||
      actionMeta.action === 'pop-value'
    ) {
      setColors(_ =>
        colors.filter(color => color.label !== actionMeta.removedValue.label)
      );
    } else {
      setColors([...new Set([...colors, ...newValue])]);
    }
  };
  const handleCategoryChange = (newValue, actionMeta) => {
    // newValue.map(value => setCategory([...category, value]));
    console.log(actionMeta);
    if (actionMeta.action === 'clear') {
      setCategory([]);
    } else if (
      actionMeta.action === 'remove-value' ||
      actionMeta.action === 'pop-value'
    ) {
      setCategory(_ =>
        category.filter(({ label }) => label !== actionMeta.removedValue.label)
      );
    } else {
      setCategory([...new Set([...category, ...newValue])]);
    }
  };

  // Handle Submit
  const onSubmit = data => {
    onFormSubmit({
      ...data,
      brand,
      category,
      sizes,
      colors,
    });
  };
  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-5'>
        <div className='w-full'>
          <label htmlFor='title' className='text-gray-600 mb-2 block'>
            Product title
          </label>
          <input
            required
            type='text'
            name='title'
            id='title'
            className='bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
            placeholder='Enter product title'
            {...register('title', { required: true })}
          />
        </div>
        <div className='w-full'>
          <label
            htmlFor='meta_description'
            className='text-gray-600 mb-2 block'
          >
            Meta Description
          </label>
          <textarea
            required
            type='text'
            name='meta_description'
            id='meta_description'
            rows='3'
            className={`bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400`}
            placeholder='Enter meta description'
            {...register('meta_description', { required: true })}
          />
        </div>
        <div className='w-full'>
          <label htmlFor='description' className='text-gray-600 mb-2 block'>
            Description
          </label>
          <textarea
            required
            type='text'
            name='description'
            id='description'
            rows='3'
            className={`bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400`}
            placeholder='Enter your product description'
            {...register('description', { required: true })}
          />
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='warranty' className='text-gray-600 mb-2 block'>
              Warranty
            </label>
            <input
              type='text'
              name='warranty'
              id='warranty'
              className='bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Enter product warranty'
              {...register('warranty')}
            />
          </div>
          <div className='w-full'>
            <label htmlFor='price' className='text-gray-600 mb-2 block'>
              Price
            </label>
            <input
              required
              type='text'
              name='price'
              id='price'
              className='bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Enter product price'
              {...register('price', { required: true })}
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='materials' className='text-gray-600 mb-2 block'>
              Materials
            </label>
            <input
              type='text'
              name='materials'
              id='materials'
              className='bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Enter product materials'
              {...register('materials')}
            />
          </div>
          <div className='w-full'>
            <label htmlFor='weight' className='text-gray-600 mb-2 block'>
              Weight
            </label>
            <input
              type='text'
              name='weight'
              id='weight'
              className='bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Enter product weight'
              {...register('weight')}
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='discount' className='text-gray-600 mb-2 block'>
              Discount Price
            </label>
            <input
              type='text'
              name='discount'
              id='discount'
              className='bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Enter product discount'
              {...register('discount')}
            />
          </div>
          <div className='w-full'>
            <label htmlFor='countInStock' className='text-gray-600 mb-2 block'>
              Product in Stock
            </label>
            <input
              required
              type='text'
              name='countInStock'
              id='countInStock'
              className='bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='Enter product stock'
              {...register('countInStock', { required: true })}
            />
          </div>
          <div className='w-full'>
            <label htmlFor='brand' className='text-gray-600 mb-2 block'>
              Brand
            </label>
            <CreatableSelect
              isClearable
              onChange={handleBrandChange}
              defaultValue={defaultValues?.brand || ''}
              options={null}
              styles={customStyles}
              placeholder='Type Brand name'
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='size' className='text-gray-600 mb-2 block'>
              Sizes
            </label>
            <CreatableSelect
              isMulti
              isClearable
              defaultValue={defaultValues?.sizes || ''}
              onChange={handleSizesChange}
              options={null}
              styles={customStyles}
              placeholder='Type sizes and press enter'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='color' className='text-gray-600 mb-2 block'>
              Colors
            </label>
            <CreatableSelect
              isMulti
              isClearable
              defaultValue={defaultValues?.colors || ''}
              onChange={handleColorsChange}
              options={null}
              styles={customStyles}
              placeholder='Type hex color'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='category' className='text-gray-600 mb-2 block'>
              Category
            </label>
            <CreatableSelect
              isMulti
              isClearable
              defaultValue={defaultValues?.category || ''}
              onChange={handleCategoryChange}
              options={null}
              styles={customStyles}
              placeholder='Type category'
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
