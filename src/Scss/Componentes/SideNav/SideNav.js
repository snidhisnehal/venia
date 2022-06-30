import React from 'react';
import Color from './Color';
// import Option from './Option';

const SideNav = () => {
  return (
    <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 sidenav'>
      <p>Clothing / Women’s / Outerwear</p>
      <h6 className='filter'>Filters</h6>
      <hr />
      <h6 className='attr'>Attribute</h6>
      <div className='option'>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>

        </div>
      <h6><a>Show more</a></h6>
      <hr />
      <h6 className='attr'>Attribute</h6>
      <div className='option'>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>

        </div>
      <hr />
      <Color/>
      <hr/>
      <h6 className='attr'>Attribute</h6>
      <div className='option'>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="filter-container">option
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>

        </div>
        
    </div>
  )
}

export default SideNav
