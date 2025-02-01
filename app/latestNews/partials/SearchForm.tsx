import SidebarWidget from '@/components/common/SidebarWidget'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchForm = () => {
  return (
    <SidebarWidget headingText='Search'>
      <form className="widget_search">
        <div className="input-group">
          <input type="search" className="form-control padding-5" placeholder="Search..." />
          <button type="submit" className="input-group-addon"><FontAwesomeIcon icon={faSearch} className="fa-fw white" /> </button>
        </div>
      </form>
    </SidebarWidget>
  )
}

export default SearchForm