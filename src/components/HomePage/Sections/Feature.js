import { features } from '@configs/static';

const Feature = () => {
  return (
    <section className='container py-16'>
      <div className='max-w-sm sm:max-w-full lg:w-[95%] xl:w-10/12 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-3 justify-center'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='border border-primary px-3 py-3 lg:py-6 rounded-md flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5'
          >
            <img
              src={feature.icon}
              alt=''
              className='w-6 h-6 md:w-10 md:h-10 xl:w-12 xl:h-12 object-contain'
            />
            <div className='text-center md:text-left'>
              <h4 className='text-base md:text-lg font-medium capitalize'>
                {feature.title}
              </h4>
              <p className='text-gray-500 text-xs md:text-sm'>
                {feature.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
