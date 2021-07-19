import { useState } from 'react';
import { FileUploader, Button } from '@components/index';
import SectionTitle from '@components/AdminPage/SectionTitle';
import { BrandForm } from '@components/AdminPage';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getBrandById, updateBrand } from '@utils/api';
import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';

const BrandEditScreen = () => {
  const { query } = useRouter();
  const { id } = query;
  const [images, setPictures] = useState([]);

  const client = useQueryClient();

  const { data: defaultValues, isLoading } = useQuery(
    ['brands', { id }],
    getBrandById
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBrand);

  // Handle Submit
  const onFormSubmit = async data => {
    await mutateAsync({ ...{ ...data, images }, id });
    await client.invalidateQueries('brands');
  };

  if (isLoading) return 'Loading...';

  return (
    <>
      <SectionTitle
        title='Edit brand'
        subtitle='Update brand in your shop'
        right={<Button label='Update' formId='edit-brand' submit />}
      />
      <div className='grid lg:grid-cols-5 gap-10 my-10'>
        <div className='lg:col-span-3'>
          <div className='p-8 bg-white rounded'>
            <BrandForm
              formId='edit-brand'
              {...{ onFormSubmit, defaultValues }}
            />
          </div>
        </div>
        <div className='lg:col-span-2'>
          <FileUploader
            title='Upload brand image'
            folderName='brands'
            defaultImages={defaultValues?.images}
            {...{ setPictures }}
          />
        </div>
      </div>
    </>
  );
};

export default BrandEditScreen;
