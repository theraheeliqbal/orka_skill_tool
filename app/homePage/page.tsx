"use client";

import TopBanner from "@/components/common/TopBanner";
import CounterSection from "../../components/common/Counter";
import AboutSection from "../../components/common/AboutSection";
import BlogSection from "./partials/BlogSection";
import TestimonialSlider from "./partials/TestimonialSlider";
import HeroSlider from "./partials/HeroSlider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import index from "@/components/navbar";
import Image from "next/image";
import ExperienceProfessional from "@/components/common/ ExperienceProfessional";
import { CustomInfoCard } from "@/components/common/CustomInforCard";
import { benefits } from "@/constants";

export default function HomePage() {

  const images = [
    '/news-img2.jpg',
    '/news-img2.jpg',
    '/news-img3.jpg',
    '/news-img2.jpg',
    '/news-img2.jpg',
    '/news-img3.jpg',
  ];

  return (
    <>
      <HeroSlider />

      <AboutSection />

      <section className="bg-white">
        <div
          className="top-banner-cover bg-cover bg-no-repeat bg-fixed bg-center contact-img no-after"
          style={{
            backgroundImage: 'url(/output-onlinePngTools1.png)',
          }}
        >
          <div className="container">
            <div className="flex md:flex-row flex-col gap-[20px]">
              <div className="md:w-1/2 w-full">
                <div className="flex flex-col h-[100%] justify-center">
                  <div className='max-w-[95%] mx-auto'>
                    <h5 className="text-[#97acc6] font-openSans">Lorum ipsum dolar smit Amet Consecuter </h5>
                    <h2 className="font-normal blue capitalize text-[40px] mt-[30px] font-raleway">We are <span className="orange">Making Business</span> Better for everyone</h2>
                  </div>

                  <div className="bg-white px-[15px] py-[35px] mt-[35px]">
                    {new Array(2).fill(null).map((_, index) => (
                      <div className="mb-[20px]">
                        <ExperienceProfessional heading="Experience professional" subheading="Lorum ipsum dolar smit Amet Consecuter  Amet Consecuter" icon={<svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="#ff00a2"
                          className="w-[22px] h-[22px]"
                        >
                          <path
                            d="M432 256c0 13.3-10.7 24-24 24H264v144c0 13.3-10.7 24-24 
                                    24h-32c-13.3 0-24-10.7-24-24V280H40c-13.3 0-24-10.7-24-24v-32c0-13.3 
                                    10.7-24 24-24h144V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 
                                    24v120h144c13.3 0 24 10.7 24 24v32z"
                            strokeWidth="48"  // Making the path lines extra bold
                          />
                        </svg>}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <CustomInfoCard
                  title="Silver"
                  key='sliver'
                  containerClasses="!max-w-[100%]"
                  btnClasses="btn btn-blue !rounded-[50px] !py-[10px]"
                  renderHeaderSection={
                    <div className="price-tag flex items-center">
                      <div className="price alt-font text-dark-gray">
                        <h3 className="currency text-capitalize m-0"><span className="sign">$</span>45</h3>
                        <span className="month text-capitalize">Year</span>
                      </div>

                      <p className="price-text no-margin">It has survived not only five centu but also the leap electronic.</p>
                    </div>
                  }

                  renderBodySection={
                    <ul className="packages">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 mb-2">
                          <FontAwesomeIcon icon={faCheck} color="#99d747" className="fa-fw" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div
          className="top-banner-cover bg-cover bg-no-repeat bg-fixed bg-center contact-img no-after"
          style={{
            backgroundImage: 'url(/output-onlinepngtools.png)',
          }}
        >
          <div className="container">
            <CustomInfoCard
              title="Silver"
              key='sliver'
              containerClasses="!max-w-[100%] w-[300px] mx-auto !bg-transparent"
              btnClasses="btn btn-blue !rounded-[50px] !py-[8px]"
              renderHeaderSection={
                <div className="price-tag flex items-center">
                  <div className="price alt-font text-dark-gray">
                    <h3 className="currency text-capitalize m-0"><span className="sign">$</span>45</h3>
                    <span className="month text-capitalize">Year</span>
                  </div>

                  <p className="price-text no-margin">It has survived not only five centu but also the leap electronic.</p>
                </div>
              }

              renderBodySection={
                <ul className=" flex flex-col items-center">
                  <li key='TRY' className="flex items-center gap-2 mb-2">
                    <FontAwesomeIcon icon={faCheck} fontSize='20px' color="#99d747" className="fa-fw" />
                    <span className="text-[20px]">TRY</span>
                  </li>

                  <li key='TRY' className="flex items-center gap-2 mb-2">
                    <FontAwesomeIcon icon={faCheck} fontSize='20px' color="#99d747" className="fa-fw" />
                    <span className="text-[20px]">PADEL ORKANO</span>
                  </li>

                  <li key='TRY' className="flex items-center gap-2 mb-2">
                    <FontAwesomeIcon icon={faCheck} fontSize='20px' color="#99d747" className="fa-fw" />
                    <span className="text-[20px]">WITH US</span>
                  </li>
                </ul>
              }
            />
          </div>
        </div>
      </section>

      <CounterSection />

      <section className="py-[7.5rem]">
        <BlogSection images={images} index={2} />
      </section>

      <TestimonialSlider />
    </>
  );
}
