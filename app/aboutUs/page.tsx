import AboutSection from "@/components/common/AboutSection";
import CounterSection from "@/components/common/Counter";
import TopBanner from "@/components/common/TopBanner";
import MarketingSection from "./partials/MarketingSection";


export default function AboutPage() {
  return (
    <>
      <TopBanner notHome bannerImage="https://megaone.acrothemes.com/insurance/img/contact-cover.jpg" title="About Us" subTitle="We Give The Best Insurance In our Country" />
      <MarketingSection />
      <AboutSection />
      <CounterSection />
    </>
  );
}
