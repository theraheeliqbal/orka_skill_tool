import React from 'react';


// Dynamic import to prevent SSR issues with OwlCarousel

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const BlogSection = () => {
  const images = [
    '/news-img2.jpg',
    '/news-img2.jpg',
    '/news-img3.jpg',
    '/news-img2.jpg',
    '/news-img2.jpg',
    '/news-img3.jpg',
  ];

  return (
    <div className=' bg-[white] py-[3.5rem] md:py-[7.5rem] relative'>
      <div className='container'>

        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="md:w-1/2 w-2/2">
            <div className='md:pr-[30px] w-full overflow-hidden'>
              <div className="relative">
                <div className="date">
                  <h5 className="m-0">20</h5>
                  <h5 className="m-0">Feb</h5>
                  <h5 className="m-0">2020</h5>
                </div>

                <Swiper id='blog-slider-1' spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}

                  navigation={true}
                  modules={[Autoplay]}
                  className="mySwiper">
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/*Right Content */}
          <div className="md:w-1/2 w-2/2">
            <div className='blog-text text-right ml-auto h-full'>
              <div className='flex flex-col justify-center h-full items-end'>
                <h2>Best Insurance Agency</h2>

                <p className='mb-[25px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus
                  gravida, neque nec interdum cursus, erat ligula. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>

                <a
                  href="insurance/news.html"
                  className="btn !rounded-[50px] !inline-flex btn-large btn-green fadeInDown-slide animated  text-capitalize"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BlogSection;
