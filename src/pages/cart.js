import Link from 'next/link';
import { useRouter } from 'next/router';
import { TrashIcon } from '@heroicons/react/outline';
import { BreadCrumbs, CartSummary, QuantityButton } from '@components/index';

const CartScreen = () => {
  const router = useRouter();
  return (
    <>
      <BreadCrumbs items={['Shopping cart']} />
      <div className='container grid lg:grid-cols-12 gap-10 pb-16'>
        <div className='lg:col-span-8 xl:col-span-9'>
          {/* <h1 className='py-2 px-3 bg-gray-50 rounded flex items-center'>
            <span className='w-3/5'>Products</span>
            <span className='w-3/12'>Quantity</span>
            <span className='w-3/5'>Total price</span>
          </h1> */}
          <div className='border border-gray-200 p-5 rounded flex flex-col md:flex-row gap-5 md:items-center justify-between'>
            <div className='flex flex-col sm:flex-row gap-5 sm:items-center'>
              <div className='sm:max-w-[150px]'>
                <img
                  src='/images/products/product1.jpg'
                  alt=''
                  className='w-full sm:max-h-[105px]'
                />
              </div>
              <div className='max-w-sm'>
                <Link href='/shop/1'>
                  <a className='text-lg block mb-4 font-medium uppercase text-gray-800 hover:text-primary transition'>
                    XB450AP Extra Bass Headphones
                  </a>
                </Link>
                <p className='text-base font-medium text-primary'>$45.00</p>
                <p className='text-base'>Size M</p>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <QuantityButton quantity='01' />
              <div className='mx-auto'>
                <p className='text-primary px-4 md:px-10'>$45.00</p>
              </div>
              <button className='px-5 py-3 hover:text-primary transition'>
                <TrashIcon className='w-8 h-8' />
              </button>
            </div>
          </div>
        </div>
        <div className='lg:col-span-4 xl:col-span-3'>
          <CartSummary
            label='Process to checkout'
            summary={{ subtotal: 45.0, total: 45.0 }}
            onClick={() => router.push('/shipping')}
          />
        </div>
      </div>
    </>
  );
};

export default CartScreen;
