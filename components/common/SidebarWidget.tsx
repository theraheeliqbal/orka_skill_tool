import React, { FC } from 'react'

interface SidebarWidgetInterface {
  headingText: string;
  children: JSX.Element;
}

const SidebarWidget: FC<SidebarWidgetInterface> = ({ headingText, children }) => {
  return (
    <div className="widget heading_space">
      <h4 className="text-capitalize pb-10 text-[#2c3459]">{headingText}</h4>

      {children}
    </div>
  )
}

export default SidebarWidget