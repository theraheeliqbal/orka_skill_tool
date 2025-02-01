import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MarketingSection = () => {
  return (
    <section className='bg-[#f9f8fa] py-[7.5rem]'>
      <div className='container'>
        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="w-2/2 md:w-1/2">
            <div className='pr-[4rem]'>
              <div className='rare-box'></div>
              <img src="/about.jpg" className="image-about relative w-[100%]" alt="" />
            </div>
          </div>

          {/*Right Content */}
          <div className="w-2/2 md:w-1/2">
            <h5 className="pb-3 sm-pt-3 text-capitalize">Lorem ipsum dolor sit amet consectetur</h5>

            <h2 className="text-[42px]" data-wow-delay="400ms">We are <span className="orange">making business</span> better for everyone</h2>


            <p className="pt-[14px] text-[#9da0b2] about-p mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue diam, accumsan vitae justo non, euismod aliquam lectus.
              Etiam elementum tortor quis risus posuere, in cursus arcu lobortis.</p>

            <ul className="pl-0 pt-[0.5rem] left-about bg-grey">
              <li><FontAwesomeIcon icon={faArrowRight} className="fa-fw orange" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li><FontAwesomeIcon icon={faArrowRight} className="fa-fw orange" /> Morbi ornare nibh id cursus vestibulum.</li>
              <li><FontAwesomeIcon icon={faArrowRight} className="fa-fw orange" /> Duis vitae lectus facilisis, tristique lorem sit amet, malesuada diam.</li>
            </ul>

            <a className="btn !rounded-[50px] btn-large btn-green text-capitalize mt-[30px]">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketingSection