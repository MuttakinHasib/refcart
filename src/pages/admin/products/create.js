import { useForm } from 'react-hook-form';
import ImageUploader from 'react-images-upload';
import SectionTitle from '@components/AdminPage/SectionTitle';
import { useState } from 'react';

const CreateProductScreen = () => {
  const { handleSubmit, register } = useForm();
  const [pictures, setPictures] = useState([]);
console.log(pictures);
  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
  return (
    <>
      <SectionTitle
        title='Create product'
        subtitle='Add new product in your shop'
      />
      <div className='grid grid-cols-5 gap-10 my-10'>
        <div className='col-span-3 p-8 bg-white rounded'>
          <form action=''>
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
            </div>
          </form>
        </div>
        <div className='col-span-2'>
          <ImageUploader
            // {...props}
            withPreview
            withIcon={false}
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          />
        </div>
      </div>
    </>
  );
};

export default CreateProductScreen;
