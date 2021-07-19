import { useState } from 'react';
import { FileUploader, Button } from '@components/index';
import SectionTitle from '@components/AdminPage/SectionTitle';
import { useDispatch } from 'react-redux';
import { BrandForm } from '@components/AdminPage';
import { attemptCreateBrand } from '@features/brand/brandActions';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getBrandById } from '@utils/api';

const EditBrandScreen = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { id } = query;

  const [images, setPictures] = useState([]);
  const { data: defaultValues, isLoading } = useQuery(
    ['brand', { id }],
    getBrandById
  );

  // Handle Submit
  const onFormSubmit = data => {
    dispatch(
      attemptCreateBrand({
        ...data,
        image: images.length ? Object.assign(...images) : undefined,
      })
    );
  };

  if (isLoading) return 'Loading...';

  return (
    <>
      <SectionTitle
        title='Create brand'
        subtitle='Add new brand in your shop'
        right={<Button label='Publish' formId='add-brand' submit />}
      />
      <div className='grid lg:grid-cols-5 gap-10 my-10'>
        <div className='lg:col-span-3'>
          <div className='p-8 bg-white rounded'>
            <BrandForm
              formId='add-brand'
              {...{ onFormSubmit, defaultValues }}
            />
          </div>
        </div>
        <div className='lg:col-span-2'>
          <FileUploader
            title='Upload brand image'
            folderName='brands'
            {...{ setPictures, defaultValues }}
          />
        </div>
      </div>
    </>
  );
};

export default EditBrandScreen;
