import React from "react";

interface FooterLinkListProps {
  links: string[];
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <a href="#" className="hover:text-orange">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinkList;
