import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@configs/static';

const Category = () => {
  return (
    <section className='container py-16'>
      <h2 className='text-3xl font-medium text-gray-800 uppercase mb-6'>
        Shop by category
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='relative rounded-md overflow-hidden group'
          >
            <div className='wrapper-image'>
              <Image
                src={category.image}
                width={1540}
                height={960}
                priority
              />
            </div>
            <Link href={category.url}>
              <a className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center font-roboto font-medium text-white transition group-hover:bg-opacity-50'>
                {category.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
