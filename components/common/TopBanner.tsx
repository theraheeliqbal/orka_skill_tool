import { TopBannerInterface } from '@/app/types';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

const TopBanner: FC<TopBannerInterface> = ({ notHome, bannerImage, title, subTitle }) => {
  return (
    <section className="relative pb-0 pt-[100px]">
      <div
        className="top-banner-cover bg-cover bg-no-repeat bg-fixed bg-center contact-img"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="container">
          <div className='z-10 relative'>
            <h2 className="text-capitalize mb-15 text-center text-white">{title}</h2>
            <h5 className="text-white text-center">{subTitle}</h5>

            {notHome &&
              <div className="page_nav pt-[10px] text-center">
                <a href="../index-insurance.html" className="text-white text-[16px]">Home</a> <span className="text-white text-[16px]"> <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-fw" /> {title}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
