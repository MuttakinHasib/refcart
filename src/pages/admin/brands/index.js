import SectionTitle from '@components/AdminPage/SectionTitle';
import { NoData } from '@components/Shared';
import { ProductSkeleton, SectionTitleSkeleton } from '@components/Skeleton';
import { getBrands } from '@utils/api';
import { Image } from 'cloudinary-react';
import Link from 'next/link';
import { useQuery } from 'react-query';

const BrandsScreen = () => {
  const { data: brands, isLoading } = useQuery('brands', getBrands);

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
        title='Brands'
        subtitle='Brand and vendor management'
        right={
          <Link href={'/admin/brands/create'}>
            <a className='py-2 px-6 bg-primary text-white rounded'>
              Create new
            </a>
          </Link>
        }
      />
      {brands.length === 0 ? (
        <NoData title='Sorry, not found' />
      ) : (
        <div className='bg-white my-10'>
          <div className='flex items-center justify-between space-x-5 flex-wrap px-8 py-6 border border-gray-100'>
            <input
              type='search'
              name='search'
              id='search'
              className='bg-gray-100 block border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 focus:bg-white placeholder-gray-400'
              placeholder='Search brand'
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
          <div className='p-8'>
            <div className='grid grid-cols-6 gap-8'>
              {brands.map(brand => (
                <Link href='/' key={brand._id}>
                  <a className='border border-gray-200 rounded-md'>
                    <div className='p-5'>
                      <Image
                        cloudName={
                          process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                        }
                        publicId={
                          brand.image.public_id ? brand.image.public_id : null
                        }
                        src={!brand.image.public_id ? brand.image.url : null}
                        alt=''
                        height={80}
                        crop='scale'
                        className='object-cover h-20 mx-auto'
                      />
                    </div>
                    <div className='border-t border-gray-200 px-3 py-2'>
                      <h3 className='text-lg text-gray-600 text-center'>
                        {brand.label}
                      </h3>
                      {/* <p className='text-green-600 text-sm text-center'>
                        19 items
                      </p> */}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandsScreen;
