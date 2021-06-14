import Link from 'next/link';
import { useState } from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';

const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  lazy: true,
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 1000,
  spaceBetween: 0,
  effect: 'slide',
  autoplay: true,
};

const Slider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.9;

  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='/images/banner-1.jpg' alt=''></img>
        </div>
        <div className='container content py-16 sm:py-10 md:py-24 lg:py-32'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 mb-4 capitalize'>
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
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='/images/banner-2.jpg' alt=''></img>
        </div>
        <div className='container content py-16 sm:py-10 md:py-24 lg:py-32'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 mb-4 capitalize'>
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
      <div className='hero-slide'>
        <div
          className='slide-image'
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src='/images/banner-3.jpg' alt=''></img>
        </div>
        <div className='container content py-16 sm:py-10 md:py-24 lg:py-32'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 mb-4 capitalize'>
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
    </Swiper>
  );
};

export default Slider;
