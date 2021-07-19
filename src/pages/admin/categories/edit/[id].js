import { useState } from 'react';
import { FileUploader, Button } from '@components/index';
import SectionTitle from '@components/AdminPage/SectionTitle';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';
import { getCategoryById, updateCategory } from '@utils/api';
import { CategoryForm } from '@components/AdminPage';

const CategoryEditScreen = () => {
  const { query } = useRouter();
  const { id } = query;
  const [images, setPictures] = useState([]);

  const client = useQueryClient();

  const { data: defaultValues, isLoading } = useQuery(
    ['categories', { id }],
    getCategoryById
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(updateCategory);
  console.log(defaultValues);
  // Handle Submit
  const onFormSubmit = async data => {
    await mutateAsync({ ...{ ...data, images }, id });
    await client.invalidateQueries('categories');
  };

  if (isLoading) return 'Loading...';

  return (
    <>
      <SectionTitle
        title='Edit category'
        subtitle='Update category in your shop'
        right={<Button label='Update' formId='edit-category' submit />}
      />
      <div className='grid lg:grid-cols-5 gap-10 my-10'>
        <div className='lg:col-span-3'>
          <div className='p-8 bg-white rounded'>
            <CategoryForm
              formId='edit-category'
              {...{ onFormSubmit, defaultValues }}
            />
          </div>
        </div>
        <div className='lg:col-span-2'>
          <FileUploader
            title='Upload category image'
            folderName='categories'
            defaultImages={defaultValues?.images}
            {...{ setPictures }}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryEditScreen;
