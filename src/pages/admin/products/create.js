import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FileUploader, Button } from '@components/index';
import CreatableSelect from 'react-select/creatable';
import SectionTitle from '@components/AdminPage/SectionTitle';
import { attemptCreateProduct } from '@features/product/productActions';
import { useDispatch } from 'react-redux';

const customStyles = {
  control: style => ({
    ...style,
    width: '100%',
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

const CreateProductScreen = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const [pictures, setPictures] = useState([]);
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
    newValue.map(value => setCategory([...category, value.label]));
    if (actionMeta.action === 'clear') {
      setCategory([]);
    }
  };

  // Handle Submit
  const onSubmit = async data => {
    try {
      dispatch(
        attemptCreateProduct({
          ...data,
          pictures,
          brand,
          category,
          sizes,
          colors,
        })
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <SectionTitle
        title='Create product'
        subtitle='Add new product in your shop'
        right={<Button label='Publish' formId='add-product' submit />}
      />
      <div className='grid lg:grid-cols-5 gap-10 my-10'>
        <div className='lg:col-span-3'>
          <div className='p-8 bg-white rounded'>
            <form id='add-product' onSubmit={handleSubmit(onSubmit)}>
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
                    htmlFor='description'
                    className='text-gray-600 mb-2 block'
                  >
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
                <div className='w-full'>
                  <label
                    htmlFor='warranty'
                    className='text-gray-600 mb-2 block'
                  >
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
                <div className='flex flex-col lg:flex-row items-center gap-5'>
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
                  <div className='w-full'>
                    <label
                      htmlFor='countInStock'
                      className='text-gray-600 mb-2 block'
                    >
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
                    <label
                      htmlFor='category'
                      className='text-gray-600 mb-2 block'
                    >
                      Category
                    </label>
                    <CreatableSelect
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
          </div>
        </div>
        <div className='lg:col-span-2'>
          <FileUploader title='Upload product image' {...{ setPictures }} />
        </div>
      </div>
    </>
  );
};

export default CreateProductScreen;
