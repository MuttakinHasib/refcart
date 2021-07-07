import { useState } from 'react';
import { FileUploader, Button } from '@components/index';
import SectionTitle from '@components/AdminPage/SectionTitle';
import { attemptCreateProduct } from '@features/product/productActions';
import { useDispatch } from 'react-redux';
import { ProductForm } from '@components/AdminPage';

const CreateProductScreen = () => {
  const dispatch = useDispatch();

  const [images, setPictures] = useState([]);

  // Handle Submit
  const onFormSubmit = data => {
    dispatch(attemptCreateProduct({ ...data, images }));
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
            <ProductForm formId='add-product' {...{ onFormSubmit }} />
          </div>
        </div>
        <div className='lg:col-span-2'>
          <FileUploader
            title='Upload product image'
            folderName='products'
            {...{ setPictures }}
          />
        </div>
      </div>
    </>
  );
};

export default CreateProductScreen;
