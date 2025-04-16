import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface MarketingSectionProps {
  containerClass?: string
  vertical?: boolean;
  reverseOrder?: boolean;
}

const MarketingSection: React.FC<MarketingSectionProps> = ({ vertical = false, containerClass, reverseOrder }) => {
  return (
    <section className={`${containerClass}`}>
      <div className='container'>
        <div className={`flex ${vertical ? 'flex-col' : 'flex-col md:flex-row'}`}>
          {/* Left Content */}
          <div className={`w-full ${vertical ? '' : 'md:w-1/2'} ${reverseOrder ? 'order-2' : 'order-1'}`}>
            <div className={`${vertical ? '' : 'pr-[4rem]'}`}>
              <div className={`rare-box ${vertical ? 'w-full mb-4' : ''}`} />

              <img
                src="/about.jpg"
                className={`image-about relative ${vertical ? 'w-full max-w-[700px] !mx-auto' : 'w-[100%]'}`}
                alt=""
              />
            </div>
          </div>

          {/* Right Content */}
          <div className={`w-full ${vertical ? '' : 'md:w-1/2'} ${reverseOrder ? 'order-1' : 'order-2'}`}>
            <div className={`${vertical ? 'text-center' : ''}`}>
              <h5 className="pb-3 sm-pt-3 text-capitalize">
                Lorem ipsum dolor sit amet consectetur
              </h5>

              <h2 className="text-[42px]" data-wow-delay="400ms">
                We are <span className="orange">making business</span> better for everyone
              </h2>
            </div>

            <p className="pt-[14px] text-[#9da0b2] about-p mb-[20px] text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue diam, accumsan vitae justo non,
              euismod aliquam lectus. Etiam elementum tortor quis risus posuere, in cursus arcu lobortis.
            </p>

            <div className={`${vertical ? 'flex flex-col items-center' : ''}`}>
              <ul className="pl-0 pt-[0.5rem] left-about bg-grey inline-block text-left">
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="fa-fw orange" /> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="fa-fw orange" /> Morbi ornare nibh id cursus
                  vestibulum.
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="fa-fw orange" /> Duis vitae lectus facilisis,
                  tristique lorem sit amet, malesuada diam.
                </li>
              </ul>

              <a className="btn !rounded-[50px] btn-large btn-green text-capitalize mt-[30px] inline-block">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;

