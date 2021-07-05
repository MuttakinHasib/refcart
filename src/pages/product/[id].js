import { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import {
  BreadCrumbs,
  ProductColor,
  ProductSize,
  QuantityButton,
  ProductDetailsSkeleton,
} from '@components/index';
import { Facebook, Twitter } from '@icons-pack/react-simple-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useQuery } from 'react-query';
import { getProductById } from '@utils/api';
import { useRouter } from 'next/router';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const ProductDetails = () => {
  const original = useRef(null);
  const thumbnail = useRef(null);
  const { query } = useRouter();
  const { id } = query;
  const { data: product, isLoading } = useQuery(
    ['product', { id }],
    getProductById
  );

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <>
      <BreadCrumbs items={[{ title: 'Shop', href: '/shop' }, product.title]} />

      <div className='container grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div>
          <Slider
            asNavFor={thumbnail.current}
            ref={original}
            slidesToShow={1}
            slidesToScroll={1}
            focusOnSelect
          >
            {product.images.map((image, index) => (
              <div key={index} className='focus:outline-none px-2 md:p-3'>
                <Image
                  src={image.secure_url}
                  alt=''
                  width={image.width}
                  height={image.height}
                  priority
                />
              </div>
            ))}
          </Slider>
          <div className='thumbnail'>
            <Slider
              asNavFor={original.current}
              ref={thumbnail}
              swipeToSlide={true}
              focusOnSelect={true}
              {...settings}
            >
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className='p-2 md:p-3 cursor-pointer focus:outline-none'
                >
                  <Image
                    className='thumb-img'
                    src={image.secure_url}
                    alt=''
                    width={image.width}
                    height={image.height}
                    priority
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div>
          <h2 className='text-2xl md:text-3xl font-medium uppercase mb-2'>
            {product.title}
          </h2>
          <div className='flex items-center mb-4'>
            <div className='flex gap-1 text-yellow-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            </div>
            <div className='text-xs text-gray-500 ml-3'>(150 Reviews)</div>
          </div>
          <div className='space-y-2'>
            <p className='text-gray-800 font-semibold space-x-2'>
              <span>Availability:</span>
              {product.countInStock > 0 ? (
                <span className='text-green-600'>In Stock</span>
              ) : (
                <span className='text-red-600'>Stock out</span>
              )}
            </p>
            <p className='space-x-2'>
              <span className='text-gray-800 font-semibold'>Brand:</span>
              <span className='text-gray-600'>{product.brand}</span>
            </p>
            {product.category.length > 0 && (
              <p className='flex items-center gap-2'>
                <span className='text-gray-800 font-semibold'>Category:</span>
                <div className='flex items-center gap-5'>
                  {product.category.map(({ name }, index) => (
                    <span key={index} className='text-gray-600'>
                      {name}
                    </span>
                  ))}
                </div>
              </p>
            )}
            <p className='space-x-2'>
              <span className='text-gray-800 font-semibold'>SKU:</span>
              <span className='text-gray-600 uppercase'>{product.sku}</span>
            </p>
          </div>
          <div className='flex items-baseline mt-4 mb-1 space-x-2 font-roboto'>
            <p className='text-primary text-2xl font-semibold'>
              ${product.price}
            </p>
            {product.discount && (
              <p className='text-gray-500 font-base text-sm line-through'>
                ${product.discount}
              </p>
            )}
          </div>
          <p className='mt-4 text-gray-600'>{product.meta_description}</p>

          {product.sizes.length > 0 && (
            <div className='pt-4'>
              <h2 className='text-lg text-gray-800 mb-3 uppercase font-medium'>
                Size
              </h2>
              <ProductSize sizes={product.sizes} />
            </div>
          )}
          {product.colors.length > 0 && (
            <div className='pt-4'>
              <h2 className='text-lg text-gray-800 mb-3 uppercase font-medium'>
                Color
              </h2>
              <ProductColor colors={product.colors} />
            </div>
          )}
          {/* Quantity */}
          <div className='py-4'>
            <h2 className='text-lg text-gray-800 mb-3 tracking-wider font-medium'>
              Quantity
            </h2>
            <QuantityButton quantity='01' />
          </div>
          {/* Quantity End */}
          <div className='flex flex-col sm:flex-row gap-3 border-b border-gray-200 pb-5 mt-6'>
            <button className='focus:outline-none uppercase font-medium rounded border border-primary px-8 py-2 flex items-center justify-center space-x-2 bg-primary text-white hover:text-primary hover:bg-transparent transition'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
              <span>Add to cart</span>
            </button>
            <button className='focus:outline-none uppercase font-medium rounded border border-gray-300 px-8 py-2 flex items-center justify-center space-x-2 bg-transparent text-gray-600 hover:text-primary transition'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
              <span>Wishlist</span>
            </button>
          </div>
          {/* Social Icons */}
          <div className='flex items-center gap-6 my-4'>
            <a
              href=''
              className='text-gray-400 hover:text-[#1877F2] transition'
            >
              <Facebook />
            </a>
            <a
              href=''
              className='text-gray-400 hover:text-[#1DA1F2] transition'
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className='container py-16'>
        <h3 className='text-lg border-b border-gray-200 pb-3 font-medium text-gray-800'>
          Product Details
        </h3>
        <div className='w-full md:w-3/5 pt-6'>
          <p className='text-gray-600'>{product.description}</p>
          <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6'>
            <tr>
              <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
                Color
              </th>
              <td className='py-2 px-4 border border-gray-300'>
                <div className='flex items-center gap-3'>
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center shadow-sm cursor-pointer`}
                      style={{ backgroundColor: `${color}` }}
                    />
                  ))}
                </div>
              </td>
            </tr>
            {product.material && (
              <tr>
                <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
                  Material
                </th>
                <td className='py-2 px-4 border border-gray-300'>
                  {product.material}
                </td>
              </tr>
            )}
            {product.weight && (
              <tr>
                <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
                  Weight
                </th>
                <td className='py-2 px-4 border border-gray-300'>
                  {product.weight}
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
