'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode } from 'swiper/modules';

const TestimonialSlider = () => {
  return (
    <section id='client' className='testimonial py-[7.5rem] bg-[#f9f8fa]'>
      <div className='container'>
        <div className="feedback-slides relative">
          <div className="client-thumbnails">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              autoplay={{
                delay: 2500,
              }}
              modules={[FreeMode, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='item'>
                  <div className="img-fill"><img src='/testimonial-1.jpg' alt="client" /></div>

                  <div className="title">
                    <h3 className="blue text-center mt-[30px] font-weight-600">David Muller</h3>
                    <p className="blue text-center pt-[10px] testi-heading">New York City</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='item'>
                  <div className="img-fill"><img src='/testimonial-2.jpg' alt="client" /></div>

                  <div className="title">
                    <h3 className="blue text-center mt-[30px] font-weight-600">David Muller</h3>
                    <p className="blue text-center pt-[10px] testi-heading">New York City</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='item'>
                  <div className="img-fill"><img src='/testimonial-3.jpg' alt="client" /></div>

                  <div className="title">
                    <h3 className="blue text-center mt-[30px] font-weight-600">David Muller</h3>
                    <p className="blue text-center pt-[10px] testi-heading">New York City</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* <div>
          <Swiper
            slidesPerView={1} // Show only one slide at a time
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            modules={[Autoplay, Pagination]}
            className="mySwiper1"
          >
            <SwiperSlide>
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna. Quis ipsum suspendisse ultrices gravida.” </p>
            </SwiperSlide>

            <SwiperSlide>
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna. Quis ipsum suspendisse ultrices gravida.” </p>
            </SwiperSlide>

            <SwiperSlide>
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna. Quis ipsum suspendisse ultrices gravida.” </p>
            </SwiperSlide>
          </Swiper>
        </div> */}
      </div>
    </section>
  )
}

export default TestimonialSlider