import SidebarWidget from '@/components/common/SidebarWidget'
import React from 'react'

const WebCategories = () => {
  return (
    <SidebarWidget headingText='Categories'>
      <ul className="webcats">
        <li><a className="a-recent" href="#.">Business<span>23</span></a></li>
        <li><a className="a-recent" href="#.">Car<span>09</span></a></li>
        <li><a className="a-recent" href="#.">Education<span>11</span></a></li>
        <li><a className="a-recent" href="#.">Home<span>13</span></a></li>
      </ul>
    </SidebarWidget>
  )
}

export default WebCategories