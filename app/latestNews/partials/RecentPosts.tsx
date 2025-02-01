import SidebarWidget from '@/components/common/SidebarWidget'
import React from 'react'

const RecentPosts = () => {
  return (
    <SidebarWidget headingText='Recent Posts'>
      <>
        <div className="single_post flex items-center justify-lg-flex-start bottom-[15px] justify-content-center text-lg-left pb-[20px]">
          <a href="#." className="post">
            <img src="https://megaone.acrothemes.com/insurance/img/testimonial-2.png" alt="post image" />
          </a>

          <div className="text-1">
            <a className="a-recent text-capitalize" href="#.">Life Insurance</a>
            <p className="para-color">Mar 20,2020</p>
          </div>
        </div>

        <div className="single_post flex items-center justify-lg-flex-start bottom-[15px] justify-content-center text-lg-left pb-[20px]">
          <a href="#." className="post">
            <img src="https://megaone.acrothemes.com/insurance/img/testimonial-2.png" alt="post image" />
          </a>

          <div className="text-1">
            <a className="a-recent text-capitalize" href="#.">Life Insurance</a>
            <p className="para-color">Mar 20,2020</p>
          </div>
        </div>
      </>
    </SidebarWidget>
  )
}

export default RecentPosts