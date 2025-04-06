// components/HeroSlider.jsx
import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    arrows: false,
    fade: true // 👈 adds crossfade transition
  };

  // Array of video data
  const videos = [
    {
      id: 1,
      src: "/videos/hero-video-2.mp4",
      title: "First Slide",
      description: "Description for the first video slide"
    },
    {
      id: 2,
      src: "/videos/hero-video-2.mp4",
      title: "Third Slide",
      description: "Description for the third video slide"
    },
    {
      id: 3,
      src: "/videos/hero-video-2.mp4",
      title: "Third Slide",
      description: "Description for the third video slide"
    }
  ];

  return (
    <section className="hero-section">
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className="hero-slide">
            <div className="video-container relative h-[100vh] overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="overlay absolute inset-0 z-10 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-8" />

              <div className="container absolute inset-0 z-20 flex flex-col justify-center items-start text-white p-8">
                <p className="text-[16px] text-white mb-8 font-medium ">The Most latest</p>

                <h2 className="text-4xl font-bold mb-10 text-white !text-[80px]">{video.title}</h2>

                <p className="text-2xl mb-8 text-white text-[18px]">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;