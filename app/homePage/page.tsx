"use client";

import TopBanner from "@/components/common/TopBanner";
import CounterSection from "../../components/common/Counter";
import AboutSection from "../../components/common/AboutSection";
import BlogSection from "./partials/BlogSection";
import TestimonialSlider from "./partials/TestimonialSlider";
import HeroSlider from "./partials/HeroSlider";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      {/* <TopBanner bannerImage="https://megaone.acrothemes.com/insurance/img/contact-cover.jpg" title="Home" subTitle="Home with all the things" /> */}

      <AboutSection />
      <CounterSection />
      <BlogSection />
      <TestimonialSlider />
    </>
  );
}
