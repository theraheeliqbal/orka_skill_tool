import Image from "next/image";
import React from "react";
import homepageFooterImage from "@/public/hero-banner-bottom.png";

const HomePageFooter = () => {
  return (
    <div>
      <div>
        <Image
          src={homepageFooterImage}
          alt="celebrations_footer_image"
          layout="responsive"
          width={500}
          height={500}
          className="object-cover w-full"
        />
      </div>
      <div className="bg-white h-16"></div>
    </div>
  );
};

export default HomePageFooter;
