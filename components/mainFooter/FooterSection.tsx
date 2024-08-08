import React from "react";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div className="w-full md:w-1/4 mb-6 md:mb-0">
      <h4 className="text-lg font-bold mb-4">{title}</h4>
      {children}
    </div>
  );
};

export default FooterSection;
