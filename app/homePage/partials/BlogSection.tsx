import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface BlogSectionProps {
  images: string[];
  index: number;
}

const BlogSection: React.FC<BlogSectionProps> = ({ images, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className='container'>
      <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ' mb-[50px]'}`}>
        {/* Image Side */}
        <div className="md:w-1/2 w-full">
          <div className='md:pr-[30px] w-full overflow-hidden'>
            <div className="relative">
              <div className="date">
                <h5 className="m-0">20</h5>
                <h5 className="m-0">Feb</h5>
                <h5 className="m-0">2020</h5>
              </div>

              <Swiper
                id={`blog-slider-${index}`}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={`Slide ${idx + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="md:w-1/2 w-full">
          <div className={`blog-text ${isEven ? 'text-left' : 'text-right ml-auto'}  h-full`}>
            <div className={`flex flex-col justify-center h-full ${isEven ? 'items-start' : 'items-end'}`}>
              <h2>Best Insurance Agency</h2>

              <p className='mb-[25px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus
                gravida, neque nec interdum cursus, erat ligula. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>

              <a
                href="insurance/news.html"
                className={`btn !rounded-[50px] !inline-flex btn-large ${isEven ? 'btn-blue' : 'btn-green'} fadeInDown-slide animated text-capitalize`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogSection;
