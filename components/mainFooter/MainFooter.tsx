import React from "react";
import FooterSection from "./FooterSection";
import FooterLinkList from "./FooterLinkList";
import FooterSubscribe from "./FooterSubscribe";
import SocialFooter from "../Socials";

const MainFooter: React.FC = () => {
  return (
    <footer className="bg-orange-600 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <FooterSection title="Quick Links">
          <FooterLinkList links={["Sign Up", "About Us"]} />
        </FooterSection>
        <FooterSection title="Others">
          <FooterLinkList
            links={[
              "User FAQs",
              "Contact Us",
              "Legal",
              "Privacy Policy",
              "Terms and Conditions",
            ]}
          />
        </FooterSection>
        <FooterSection title="Products">
          <FooterLinkList links={["Send", "Receive", "Buy"]} />
        </FooterSection>
        <FooterSection title="Subscribe">
          <FooterSubscribe />
        </FooterSection>
      </div>
      <div className="container mx-auto px-4 mt-4">
        <SocialFooter />
      </div>
    </footer>
  );
};

export default MainFooter;
