import SectionTitle from '@components/AdminPage/SectionTitle';
import { Loader, NoData } from '@components/Shared';
import { ProductSkeleton, SectionTitleSkeleton } from '@components/Skeleton';
import { attemptDeleteProduct } from '@features/product/productActions';
import { getAllProducts, removeImage } from '@utils/api';
import { Image } from 'cloudinary-react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { data: products, isLoading } = useQuery('products', getAllProducts);

  const handleProductDelete = (id, images) => {
    dispatch(attemptDeleteProduct(id));
    images.forEach(async image => {
      await removeImage(image.public_id);
    });
  };

  if (isLoading) {
    return (
      <>
        <SectionTitleSkeleton />
        <ProductSkeleton />
      </>
    );
  }

  return (
    <>
      <SectionTitle
        title='Products'
        subtitle='All products in your shop'
        right={
          <Link href={'/admin/products/create'}>
            <a className='py-2 px-6 bg-primary text-white rounded'>
              Create new
            </a>
          </Link>
        }
      />
      {products.length === 0 ? (
        <NoData title='Product list is empty' />
      ) : (
        <div className='bg-white my-10'>
          <div className='flex items-center justify-between space-x-5 flex-wrap px-8 py-6 border border-gray-100'>
            <input
              type='search'
              name='search'
              id='search'
              className='bg-gray-100 block border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 focus:bg-white placeholder-gray-400'
              placeholder='Search product'
            />
            <div className='flex items-center space-x-5'>
              <select
                name='category'
                id='category'
                className={`block w-48 border bg-gray-100 border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 focus:bg-white placeholder-gray-400`}
              >
                <option>All category</option>
                <option selected value='Bangladesh'>
                  Bangladesh
                </option>
              </select>
            </div>
          </div>
          <div className='p-8 divide-y divide-gray-100'>
            {products.map(product => (
              <div
                key={product._id}
                className='grid grid-cols-8 items-center gap-y-5 hover:bg-gray-100 py-5'
              >
                <div className='col-span-3'>
                  <div className='flex items-center space-x-3'>
                    <Image
                      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                      publicId={product.images[0].public_id}
                      alt=''
                      height={64}
                      width={80}
                      crop='scale'
                      className='object-cover rounded-lg'
                    />
                    {/* <img
                    src={product.images[0].secure_url}
                    alt=''
                    className='h-16 w-20 object-cover rounded-lg'
                  /> */}
                    <Link href={`/product/${product._id}`}>
                      <a className='text-gray-700 text-base hover:underline'>
                        {product.title}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='md:mx-auto'>
                  <p className='text-gray-700 uppercase'>SKU: {product.sku}</p>
                </div>
                <div className='md:mx-auto'>
                  <p className='text-base font-light text-gray-600'>
                    ${Number(product.price).toFixed(2)}
                  </p>
                </div>
                <div className='md:mx-auto'>
                  {product.countInStock > 0 ? (
                    <span className='text-sm font-semibold py-1 px-3 bg-green-200 rounded-2xl text-green-900 border border-green-300'>
                      In stock
                    </span>
                  ) : (
                    <span className='text-sm font-semibold py-1 px-3 bg-red-200 rounded-2xl text-red-900 border border-green-300'>
                      Stock out
                    </span>
                  )}
                </div>
                <div className='md:mx-auto'>
                  <p className='text-gray-700 uppercase'>
                    {product.createdAt.substring(0, 10)}
                  </p>
                </div>
                <div className='flex items-center ml-auto space-x-3'>
                  <Link href={`/admin/products/edit/${product._id}`}>
                    <a className='py-2 px-4 bg-white text-black border rounded'>
                      Edit
                    </a>
                  </Link>
                  <button
                    className='py-2 px-4 bg-red-500 text-white rounded'
                    onClick={() =>
                      handleProductDelete(product._id, product.images)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsScreen;
