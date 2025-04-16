import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface InfoCardProps {
  title: string;
  containerClasses?: string;
  btnClasses?: string;
  renderHeaderSection: React.ReactNode;
  renderBodySection: React.ReactNode;
}

export const CustomInfoCard: React.FC<InfoCardProps> = ({
  title,
  btnClasses = '',
  containerClasses = '',
  renderHeaderSection,
  renderBodySection,
}) => {

  return (
    <div className={`price-item text-left mt-[10px] ${containerClasses}`}>
      <h3 className="text-[#2c3459] font-semibold mb-4 text-capitalize">{title}</h3>

      {renderHeaderSection}

      <div className='mt-4'>
        {renderBodySection}
      </div>

      <a href="javascript:void(0);" className={`${btnClasses} !w-full !text-center inline-block mt-4`}>
        Get Started Now
      </a>
    </div>
  );
};
