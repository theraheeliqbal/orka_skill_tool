import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { href: "https://twitter.com/yourprofile", icon: <FaTwitter /> },
  { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
  { href: "https://facebook.com/yourprofile", icon: <FaFacebook /> },
];

export type SocialFooterType = {
  mainDivClassName?: string;
  iconsDivClassName?: string;
  textClassName?: string;
};

const SocialFooter = ({
  mainDivClassName = "",
  iconsDivClassName = "",
  textClassName = "",
}: SocialFooterType) => {
  return (
    <div
      className={`text-white py-4 flex items-center justify-between ${mainDivClassName}`}
    >
      <p className={`text-sm ${textClassName}`}>
        &copy; Copyright 2019 Buxer Inc, All rights reserved.
      </p>
      <div className={`flex space-x-4 ${iconsDivClassName}`}>
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            className="text-xl text-[#FA793F] hover:text-[#ED374D] w-10 h-10 rounded-full bg-white flex items-center justify-center"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialFooter;
