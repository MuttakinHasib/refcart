import { SocialIcons } from './index';

const Footer = () => {
  return (
    <>
      <footer className='bg-white pt-16 pb-12 border-t border-gray-100'>
        <div className='container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6'>
          <div className='col-span-1 space-y-8'>
            <img src='/images/logo.svg' alt='' className='w-30' />
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              culpa?
            </p>
            <SocialIcons />
          </div>
          <div className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className='grid grid-cols-2 gap-8'>
              <div>
                <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                  Solutions
                </h2>
                <div className='mt-4 space-y-4'>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Marketing
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Analytics
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Commerce
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Insights
                  </a>
                </div>
              </div>
              <div>
                <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                  Support
                </h2>
                <div className='mt-4 space-y-4'>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Pricing
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Documentation
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Guides
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    API status
                  </a>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-8'>
              <div>
                <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                  Company
                </h2>
                <div className='mt-4 space-y-4'>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    About
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Blog
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Jobs
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Press
                  </a>
                </div>
              </div>
              <div>
                <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                  Legal
                </h2>
                <div className='mt-4 space-y-4'>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Claim
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Privacy
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Policy
                  </a>
                  <a
                    href='#'
                    className='text-base text-gray-500 hover:text-gray-900 block'
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-gray-800 py-4'>
        <div className='container flex items-center justify-between'>
          <p className='text-white'>&copy; REFCART - All Rights Reserved</p>
          <div>
            <img src='/images/stripe.svg' alt='Stripe' className='h-10' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
