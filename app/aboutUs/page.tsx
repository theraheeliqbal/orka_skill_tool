"use client";
import AboutSection from "@/components/common/AboutSection";
import CounterSection from "@/components/common/Counter";
import { faFacebookF, faGoogle, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogSection from "../homePage/partials/BlogSection";
import ContactForm from "./partials/ContactForm";
import QuestionnaireUserSection from "./partials/QuestionUserSection";
import Image from "next/image";


export default function AboutPage() {
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
      <section className="relative pb-0 pt-[100px]">
        <div
          className="top-banner-cover bg-cover bg-no-repeat bg-fixed bg-center contact-img !py-[40px]"
          style={{
            backgroundImage: `url("https://megaone.acrothemes.com/insurance/img/contact-cover.jpg")`,
          }}
        >
          <div className="container">
            <div className="page_nav pt-[10px] z-10 relative !text-left">
              <a href="../index-insurance.html" className="orange text-[16px]">Home</a> <span className="orange text-[16px]"> <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-fw" /> About Us</span>
            </div>

            <div className='z-10 relative max-w-[800px] mt-3'>
              <h1 className="font-bold text-white mb-[20px] !text-[60px] capitalize font-raleway">We are <span className="orange">Making Business</span> Better for everyone</h1>
              <h3 className="orange">We Give The Best Insurance In our Country</h3>
            </div>

            <div className='z-10 relative flex gap-4 mt-[30px]'>
              <button className="btn btn-blue !text-[14px] !rounded-[50px] font-raleway !border-2 !border-white px-[18px] text-white py-[8px]">Get A Quote</button>
              <button className="btn btn-blue !text-[14px] !rounded-[50px] font-raleway !border-2 !border-white px-[18px] text-white py-[8px]">Contact Us</button>
            </div>
          </div>

        </div>
      </section>

      <QuestionnaireUserSection />

      <section className="bg-white py-[3.5rem] md:py-[7.5rem]">
        <BlogSection images={images} index={1} />
        <BlogSection images={images} index={2} />
      </section>

      <section className="bg-white">
        <div
          className="top-banner-cover bg-cover bg-no-repeat bg-fixed bg-center contact-img"
          style={{
            backgroundImage: `url(https://megaone.acrothemes.com/insurance/img/contact-cover.jpg)`,
          }}
        >
          <div className="w-[450px] relative z-10 mx-auto bg-white rounded-[10px] px-[20px] pt-[20px] pb-[40px]">
            <Image src='/commas.png' alt="" width={40} height={40} />

            <div className="mb-[30px] mt-[10px]">
              <p className="text-[14px] text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit dolor. Vivamus gravida, neque nec interdum cursus, erat ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <h5 className="text-[#464646] font-openSans font-medium">John Williams</h5>
            <h6 className="text-[#464646] text-[14px] font-openSans font-normal">Coach</h6>
          </div>
        </div>
      </section>

      <section className="bg-white pt-[7.5rem]">
        <div
          className="top-banner-cover bg-cover bg-no-repeat bg-fixed bg-center contact-img"
          style={{
            backgroundImage: `url(/output-onlineTools.png)`,
          }}
        >
          <div className="py-[3.5rem]">
            <div className="container">
              <div className="flex relative z-10">
                <div className="w-1/2">
                  <p className="font-openSans text-[16px] text-black">Lorem Ipsum Dolor Sit Amet Consectetur </p>

                  <h1 className="text-[48px] font-raleway blue">Insurance Agency, Newyork</h1>

                  <p className="orange font-openSans text-[16px] mt-[20px] font-medium">123 Stree New York City. United States Of America.
                  </p>

                  <div className="mt-[20px]">
                    <p className="orange font-openSans text-[16px] font-medium">Office Telephone: 001 01085379709 </p>
                    <p className="orange font-openSans text-[16px] font-medium">Mobile: 001 63165370895 </p>
                  </div>

                  <div className="mt-[20px]">
                    <p className="orange font-openSans text-[16px] font-medium">mail: admin@website.com</p>
                    <p className="orange font-openSans text-[16px] font-medium">Inquiries: email@website.com</p>
                  </div>

                  <div className="mt-[20px]">
                    <p className="orange font-openSans text-[16px] font-medium">Mon-Fri: 9am to 6pm
                    </p>
                  </div>

                  <div className="mt-[30px]">
                    <div className="flex flex-col">
                      {/* Social Icons */}
                      <div className="footer-social">
                        <ul className="flex space-x-6">
                          {/* Facebook */}
                          <li
                            data-aos="fade-up"
                            className="transition-transform transform hover:scale-110 cursor-pointer"
                          >
                            <a aria-label="Facebook">
                              <FontAwesomeIcon color="#2c3459" icon={faFacebookF} className="fa-fw" />
                            </a>
                          </li>
                          {/* Twitter */}
                          <li
                            data-aos="fade-down"
                            className="transition-transform transform hover:scale-110 cursor-pointer"
                          >
                            <a aria-label="Twitter">
                              <FontAwesomeIcon color="#2c3459" icon={faXTwitter} className="fa-fw" />
                            </a>
                          </li>
                          {/* Google */}
                          <li
                            data-aos="fade-up"
                            className="transition-transform transform hover:scale-110 cursor-pointer"
                          >
                            <a aria-label="Google">
                              <FontAwesomeIcon color="#2c3459" icon={faGoogle} className="fa-fw" />
                            </a>
                          </li>
                          {/* LinkedIn */}
                          <li
                            data-aos="fade-down"
                            className="transition-transform transform hover:scale-110 cursor-pointer"
                          >
                            <a aria-label="LinkedIn">
                              <FontAwesomeIcon color="#2c3459" icon={faLinkedinIn} className="fa-fw" />
                            </a>
                          </li>
                          {/* Instagram */}
                          <li
                            data-aos="fade-up"
                            className="transition-transform transform hover:scale-110 cursor-pointer"
                          >
                            <a aria-label="Instagram">
                              <FontAwesomeIcon color="#2c3459" icon={faInstagram} className="fa-fw" />
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-1/2">
                  <p className="font-openSans text-[16px] text-black">Lorem Ipsum Dolor Sit Amet Consectetur </p>

                  <h1 className="text-[48px] font-raleway blue">Insurance Agency, Newyork</h1>

                  <div className="mt-[30px]">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <CounterSection />
    </>
  );
}
