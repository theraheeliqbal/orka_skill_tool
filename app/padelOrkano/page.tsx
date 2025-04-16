import { faAngleDoubleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MarketingSection from "../aboutUs/partials/MarketingSection";
import ServicesList from "./partials/ServicesList";
import RoundTableGame from "./partials/roundTable/RoundTableGame";


const PadelOrkanoPage = ({ children }: { children: React.ReactNode }) => {
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
              <a href="../index-insurance.html" className="orange text-[16px]">Home</a> <span className="orange text-[16px]"> <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-fw" />Padel Orkano</span>
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

      <MarketingSection containerClass="bg-[#f9f8fa] py-[3.5rem] md:py-[7.5rem]" />

      <MarketingSection vertical containerClass="bg-[#e7e8ec] py-[3.5rem] md:py-[7.5rem]" />

      <MarketingSection containerClass="bg-[#f9f8fa] py-[3.5rem] md:py-[7.5rem]" reverseOrder={true} />

      <RoundTableGame />

      <ServicesList />

      <section className='bg-[#f9f8fa] py-[3.5rem] md:py-[7.5rem]'>
        <div className='container'>
          <div className="w-full !mx-auto">
            <img
              src="/about.jpg"
              className={` relative w-full`}
              alt=""
              height={400}
            />

            <div>
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

            <div className=''>
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
            </div>

            <a className="btn !rounded-[50px] btn-large btn-green text-capitalize mt-[30px] inline-block">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className='bg-[#ee0000] py-[3.5rem] md:py-[7.5rem]'>
        <div className='container'>
          <div className="flex w-full justify-between items-center mb-0">
            <h3 className="text-white font-bold font-raleway">TRY PADEL ORKANO WITH US!</h3>

            <a className="btn !uppercase !rounded-[50px] btn-large bg-white blue text-capitalize mt-[30px] inline-block">
              Get IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </>
  )
};

export default PadelOrkanoPage;
