'use client'
import { headerLinks } from '@/constants';
import { faFacebookF, faGoogle, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true); // Add class if scrolled beyond 50px
    } else {
      setIsScrolled(false); // Remove class if scrolled back up
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []);

  console.log('pathname', pathname)

  return (
    <header className={`cursor-light ${isScrolled ? 'header-appear' : ''}`}>
      <nav className="navbar navbar-top-default nav-radius navbar-expand-lg">
        <div className="container mx-auto">
          <div className='flex justify-between'>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://megaone.acrothemes.com/insurance/img/logo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <div className='navbar-collapse md:block hidden'>
              <div className="navbar-nav ml-[10px]">
                {headerLinks.map((headerLink) => {
                  const { text, url } = headerLink;
                  return (
                    <Link key={text} className={`nav-link ${pathname === url ? "active" : ""}`} href={url}>
                      {text}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              id="sidemenu_toggle"
              onClick={() => setIsOpen(true)}
              className="flex-col space-y-1 focus:outline-none inline-block md:hidden"
            >
              <Menu />
            </button>

            {isOpen && <div className='sidebar-shadow' />}

            <div className={`side-menu ${isOpen ? 'side-menu-active' : ''}`}>
              <div className="inner-wrapper">
                <span className="btn-close link" onClick={() => setIsOpen(false)} id="btn_sideNavClose"></span>

                <nav className="side-nav w-100">
                  <ul className="navbar-nav flex flex-col">
                    <li className="nav-item">
                      <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="insurance/about.html">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="insurance/price.html">Insurance Plans</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="insurance/news.html">Latest News</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="insurance/contact-us.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>

                <div className="side-footer text-white w-100">
                  <ul className="social-icons-simple">
                    <li>
                      <a href="javascript:void(0);">
                        <FontAwesomeIcon icon={faFacebookF} className="fa-fw" />
                      </a>
                    </li>

                    <li>
                      <a href="javascript:void(0);">
                        <FontAwesomeIcon icon={faXTwitter} className="fa-fw" />                        </a>
                    </li>

                    <li>
                      <a href="javascript:void(0);">
                        <FontAwesomeIcon icon={faInstagram} className="fa-fw" />
                      </a>
                    </li>
                  </ul>
                  <p className="text-white">© 2024 MegaOne. Made With Love by Themesindustry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


    </header>
  );
};

export default Header;
