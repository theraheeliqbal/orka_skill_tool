import { faCableCar, faCalendarCheck, faComment, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SingleBlog = () => {
  return (
    <>
      <div className="blog-p-img pb-0 pb-md-[10px]">
        <img src="https://megaone.acrothemes.com/insurance/img/blog-image1.jpg" className="blog-img-p" alt="image" />
      </div>

      <div className="comment-text">
        <a href="news-details.html"><h3 className="grey pt-[10px] pt-md-3">Life Insurance</h3></a>
      </div>

      <div className="comment-text">
        <ul className="comment mb-[10px]">
          <li className="green mr-3"><a className="#."><FontAwesomeIcon icon={faCalendarCheck} className="fa-fw green" /></a>Feb 10</li>
          <li className="green mr-3"><a className="#."><FontAwesomeIcon icon={faComment} className="fa-fw green" /></a>8 </li>
          <li className="green mr-3"><a className="#."><FontAwesomeIcon icon={faUser} className="fa-fw green" /></a>Emerson</li>
        </ul>
        <p className="comment-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.</p>
      </div>
    </>
  )
}

export default SingleBlog