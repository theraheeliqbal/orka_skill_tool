import React from 'react';

// Define types for the component props
interface CardProps {
  heading: string;
  subheading: string;
  icon: JSX.Element; // SVG or FontAwesome icon (or any React Element)
}

const ExperienceProfessional: React.FC<CardProps> = ({ heading, subheading, icon }) => {
  return (
    <div className="pb-[20px] border-b-[1px] border-b-[#dee7e8]">
      <div className="flex">
        <div className="bg-[#ff00a2] w-[50px] h-[50px] rounded-[50px]">
          <div className="flex justify-center items-center h-[100%]">
            <div className="w-[22px] h-[22px] bg-white rounded-[5px] p-[5px] flex items-center justify-center">
              {/* Rendering icon passed as prop */}
              {icon}
            </div>
          </div>
        </div>

        <div className="flex-1 pl-[10px]">
          <h5 className="font-medium text-[#001938]">{heading}</h5>
          <div className="mt-[10px]">
            <p className="text-[#616691] font-medium font-openSans">{subheading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceProfessional;
