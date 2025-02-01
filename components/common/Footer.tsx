// components/Footer.js
import { faFacebookF, faGoogle, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <section className="text-center bg-blue !mt-0">
      <h2 className="sr-only">Footer</h2>
      <div className="container mx-auto">
        <div className='py-[7.5rem]'>
          <div className="flex flex-col items-center">
            {/* Social Icons */}
            <div className="footer-social">
              <ul className="flex space-x-6 text-white">
                {/* Facebook */}
                <li
                  data-aos="fade-up"
                  className="transition-transform transform hover:scale-110 cursor-pointer"
                >
                  <a aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} className="fa-fw" />
                  </a>
                </li>
                {/* Twitter */}
                <li
                  data-aos="fade-down"
                  className="transition-transform transform hover:scale-110 cursor-pointer"
                >
                  <a aria-label="Twitter">
                    <FontAwesomeIcon icon={faXTwitter} className="fa-fw" />
                  </a>
                </li>
                {/* Google */}
                <li
                  data-aos="fade-up"
                  className="transition-transform transform hover:scale-110 cursor-pointer"
                >
                  <a aria-label="Google">
                    <FontAwesomeIcon icon={faGoogle} className="fa-fw" />
                  </a>
                </li>
                {/* LinkedIn */}
                <li
                  data-aos="fade-down"
                  className="transition-transform transform hover:scale-110 cursor-pointer"
                >
                  <a aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} className="fa-fw" />                </a>
                </li>
                {/* Instagram */}
                <li
                  data-aos="fade-up"
                  className="transition-transform transform hover:scale-110 cursor-pointer"
                >
                  <a aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="fa-fw" />
                  </a>
                </li>
                {/* Email */}
                <li
                  data-aos="fade-down"
                  className="transition-transform transform hover:scale-110 cursor-pointer"
                >
                  <a aria-label="Mail">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Text */}
            <p
              data-aos="fade-in"
              className="text-white text-sm capitalize mt-4"
            >
              © 2020 Megaone. Made With Love By{' '}
              <a className="text-white underline">
                Themesindustry
              </a>
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Footer;
