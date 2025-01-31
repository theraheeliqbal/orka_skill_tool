'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { headerLinks } from '@/constants';


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
            <div className='navbar-collapse'>
              <div className="navbar-nav ml-[250px]">
                {headerLinks.map((headerLink) => {
                  const { text, url } = headerLink;
                  return (
                    <Link className={`nav-link ${pathname === url ? "active" : ""}`} href={url}>
                      {text}
                    </Link>
                  )
                })}
              </div>

              {/* Hamburger Menu for Mobile */}
              <button
                id="sidemenu_toggle"
                className=" flex flex-col space-y-1 focus:outline-none hidden"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
