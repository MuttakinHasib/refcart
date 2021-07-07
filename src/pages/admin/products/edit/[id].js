import { useState } from 'react';
import { FileUploader, Button } from '@components/index';
import SectionTitle from '@components/AdminPage/SectionTitle';
import { ProductForm } from '@components/AdminPage';
import { useQuery, useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { getProductById, updateProduct } from '@utils/api';

const ProductEditScreen = () => {
  const { query } = useRouter();
  const { id } = query;
  const [images, setPictures] = useState([]);
  const { data: defaultValues, isLoading } = useQuery(
    ['products', { id }],
    getProductById
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(updateProduct);

  // Handle Submit
  const onFormSubmit = async data => {
    await mutateAsync({ ...{ ...data, images }, id });
  };

  if (isLoading) return 'Loading...';

  return (
    <>
      <SectionTitle
        title='Edit product'
        subtitle='Add new product in your shop'
        right={<Button label='Update' formId='update-product' submit />}
      />
      <div className='grid lg:grid-cols-5 gap-10 my-10'>
        <div className='lg:col-span-3'>
          <div className='p-8 bg-white rounded'>
            <ProductForm
              formId='update-product'
              {...{ onFormSubmit, defaultValues }}
            />
          </div>
        </div>
        <div className='lg:col-span-2'>
          <FileUploader
            title='Upload product image'
            folderName='products'
            defaultImages={defaultValues?.images}
            {...{ setPictures }}
          />
        </div>
      </div>
    </>
  );
};

export default ProductEditScreen;
