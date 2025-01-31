import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faChartBar, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const AboutSection = () => {
  return (
    <section className="bg-white py-[7.5rem]" id="about">
      <div className="container mx-auto text-center">
        <h4>Lorem ipsum dolor sit amet</h4>
        <h2>MegaOne Insurance</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi enim, vulputate at
          justo tristique, tempor sagittis dolor. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec sit amet ligula consequat urna posuere
          convallis.
        </p>
      </div>

      <div className="container mx-auto mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="icon-hover-effect">
            <div className='about-padding'>
              <div className='text-center'>
                <FontAwesomeIcon icon={faBook} className="fa-fw" />
              </div>
            </div>
          </div>

          <h6 className='pt-[20px]'>Market Analysis
          </h6>
          <h3 className='pt-[10px]'>
            Market Statics Growth &amp; Advance Analysis
          </h3>
        </div>

        <div className="text-center">
          <div className="icon-hover-effect">
            <div className='about-padding2'>
              <div className='text-center'>
                <FontAwesomeIcon icon={faChartBar} className="fa-fw" />
              </div>
            </div>
          </div>

          <h6 className='pt-[20px]'>Market Analysis
          </h6>
          <h3 className='pt-[10px] max-w-[179px] mx-auto'>
            Year-End Tax Planning
          </h3>
        </div>

        <div className="text-center">
          <div className="icon-hover-effect">
            <div className='about-padding'>
              <div className='text-center'>
                <FontAwesomeIcon icon={faBriefcase} className="fa-fw" />
              </div>
            </div>
          </div>

          <h6 className='pt-[20px]'>Web Solution
          </h6>
          <h3 className='pt-[10px]'>
            We Offer Different Services
          </h3>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
