import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FileUploader } from '@components/index';
import CreatableSelect from 'react-select/creatable';
import SectionTitle from '@components/AdminPage/SectionTitle';

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
  input: (style, state) => ({
    ...style,
    outline: 'none',
    border: 'none',
  }),
};

const CreateProductScreen = () => {
  const { handleSubmit, register } = useForm();
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  const handleBrandChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const handleBrandInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  return (
    <>
      <SectionTitle
        title='Create product'
        subtitle='Add new product in your shop'
      />
      <div className='grid grid-cols-5 gap-10 my-10'>
        <div className='col-span-3'>
          <div className='p-8 bg-white rounded'>
            <form>
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
                    className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
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
                    className={`block w-full border border-gray-200 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400`}
                    placeholder='Enter your product description'
                    {...register('description', { required: true })}
                  />
                </div>
                <div className='flex flex-col md:flex-row items-center gap-5'>
                  <div className='w-full'>
                    <label htmlFor='price' className='text-gray-600 mb-2 block'>
                      Price
                    </label>
                    <input
                      required
                      type='text'
                      name='price'
                      id='price'
                      className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
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
                      className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
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
                      onInputChange={handleBrandInputChange}
                      options={null}
                      styles={customStyles}
                      placeholder='Type Brand name'
                    />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-5'>
                  <div className='w-full'>
                    <label htmlFor='size' className='text-gray-600 mb-2 block'>
                      Size
                    </label>
                    <CreatableSelect
                      isMulti
                      onChange={handleBrandChange}
                      options={null}
                      styles={customStyles}
                      placeholder='Type size and press enter'
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor='color' className='text-gray-600 mb-2 block'>
                      Color
                    </label>
                    <CreatableSelect
                      isMulti
                      onChange={handleBrandChange}
                      options={null}
                      styles={customStyles}
                      placeholder='Type color and press enter'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='col-span-2'>
          <FileUploader />
        </div>
      </div>
    </>
  );
};

export default CreateProductScreen;
