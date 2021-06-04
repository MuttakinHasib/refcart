import Link from 'next/link';

const Banner = () => {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat py-36'
      style={{ backgroundImage: "url('/images/banner-bg.jpg')" }}
    >
      <div className='container'>
        <h1 className='text-6xl font-medium text-gray-800 mb-4 capitalize'>
          Best collection <br /> for home decoration
        </h1>
        <p className='text-gray-700'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio{' '}
          <br />
          in provident amet reiciendis quibusdam consectetur
        </p>
        <div className='mt-12'>
          <Link href='/shop'>
            <a className='text-white bg-primary px-8 py-3 font-medium rounded-md border border-primary hover:opacity-90 transition'>
              Shop Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
