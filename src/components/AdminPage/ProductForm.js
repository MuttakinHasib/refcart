import { useState } from 'react';
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

  const handleBrandChange = (newValue, actionMeta) => {
    if (newValue) {
      setBrand(newValue.value);
    }
    if (actionMeta.action === 'clear') {
      setBrand(null);
    }
  };
  const handleSizesChange = (newValue, actionMeta) => {
    newValue.map(value => setSizes([...sizes, value.label]));
    if (actionMeta.action === 'clear') {
      setSizes([]);
    }
  };
  const handleColorsChange = (newValue, actionMeta) => {
    newValue.map(value => setColors([...colors, value.label]));
    if (actionMeta.action === 'clear') {
      setColors([]);
    }
  };
  const handleCategoryChange = (newValue, actionMeta) => {
    newValue.map(value => setCategory([...category, { name: value.label }]));
    if (actionMeta.action === 'clear') {
      setCategory([]);
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
              // onInputChange={handleBrandInputChange}
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
              defaultValue={defaultValues?.category || ''}
              isMulti
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
