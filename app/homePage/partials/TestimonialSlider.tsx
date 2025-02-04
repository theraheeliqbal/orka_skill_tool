import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper'; // ✅ Import Swiper type

const TestimonialSlider = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null);

  return (
    <section id='client' className='testimonial py-[3.5rem] md:py-[7.5rem] bg-[#f9f8fa]'>
      <div className='container'>
        {/* Thumbnails Slider */}
        <div className="feedback-slides relative">
          <div className="client-thumbnails">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              autoplay={{ delay: 2500 }}
              modules={[Autoplay, FreeMode, Controller]}
              onSwiper={(swiper) => setControlledSwiper(swiper)}
              className="mySwiper"
            >
              {[1, 2, 3].map((num, index) => (
                <SwiperSlide key={index}>
                  <div className='item'>
                    <div className="img-fill">
                      <img src={`/testimonial-${num}.jpg`} alt="client" />
                    </div>
                    <div className="title">
                      <h3 className="blue text-center mt-[30px] font-weight-600">David Muller</h3>
                      <p className="blue text-center pt-[10px] test-heading text-[#2c3459]">New York City</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Main Testimonial Slider */}
        <div>
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            modules={[Autoplay, Pagination, Controller]}
            controller={{ control: controlledSwiper ?? undefined }} // ✅ Handle null case
            className="mySwiper1"
          >
            {[1, 2, 3].map((num, index) => (
              <SwiperSlide key={index}>
                <p className='text-center mt-[20px]'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna.”
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
