import TopBanner from "@/components/common/TopBanner";
import ContactForm from "./partials/ContactForm";


export default function ContactPage() {
  return (
    <>
      <TopBanner notHome bannerImage="https://megaone.acrothemes.com/insurance/img/contact-cover.jpg" title="Contact Us" subTitle="Meet Our Insurance Agency & Get Good Insurance" />
      <ContactForm />
    </>
  );
}
