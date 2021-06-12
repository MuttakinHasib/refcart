import { features } from '@configs/static';

const Feature = () => {
  return (
    <section className='container py-16'>
      <div className='w-10/12 mx-auto grid gap-6 grid-cols-3 justify-center'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='border border-primary px-3 py-6 rounded-md flex justify-center items-center gap-5'
          >
            <img
              src={feature.icon}
              alt=''
              className='w-12 h-12 object-contain'
            />
            <div>
              <h4 className='text-lg font-medium capitalize'>
                {feature.title}
              </h4>
              <p className='text-gray-500 text-sm'>{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
