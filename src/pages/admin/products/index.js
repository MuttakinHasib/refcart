import SectionTitle from '@components/AdminPage/SectionTitle';
import Link from 'next/link';

const ProductsScreen = () => {
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
    </>
  );
};

export default ProductsScreen;
