import { useState } from 'react';
import { FileUploader, Button } from '@components/index';
import SectionTitle from '@components/AdminPage/SectionTitle';
import { useDispatch } from 'react-redux';
import { CategoryForm } from '@components/AdminPage';
import { attemptCreateCategory } from '@features/category/categoryActions';

const CreateProductScreen = () => {
  const dispatch = useDispatch();

  const [images, setPictures] = useState([]);
  // Handle Submit
  const onFormSubmit = data => {
    dispatch(
      attemptCreateCategory({
        ...data,
        image: images.length ? Object.assign(...images) : undefined,
      })
    );
  };

  return (
    <>
      <SectionTitle
        title='Create category'
        subtitle='Add new category in your shop'
        right={<Button label='Publish' formId='add-category' submit />}
      />
      <div className='grid lg:grid-cols-5 gap-10 my-10'>
        <div className='lg:col-span-3'>
          <div className='p-8 bg-white rounded'>
            <CategoryForm formId='add-category' {...{ onFormSubmit }} />
          </div>
        </div>
        <div className='lg:col-span-2'>
          <FileUploader
            title='Upload category image'
            folderName='categories'
            {...{ setPictures }}
          />
        </div>
      </div>
    </>
  );
};

export default CreateProductScreen;
