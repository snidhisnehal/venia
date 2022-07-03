import React from 'react';

import { List } from './Data/Data';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const NAvbar = () => {
  const cartCounter = useSelector((value) => {
    return value.cart.item
  });
  const totalCartItem = cartCounter.length;
  console.log(totalCartItem);
  return (
    <>
      <nav className="aem-Grid aem-Grid--12 container">

        {
          List.map((prop) => {
            return (
              <>

                {/* <button className="hamburger">
                  {/* icon from heroicons.com */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button> */} 

                {/* <div className="aem-GridColumn aem-GridColumn--default--2 logo"><span className="logo-one-text">V</span><span class=" ">ENIA</span></div> */}
                <div className="aem-GridColumn aem-GridColumn--default--2 logo-align">
                  <div className='toggle'>
                <button className="hamburger">
                  {/* icon from heroicons.com */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                </div>
                  <NavLink to='/'><img src={prop.Logo} alt="Logo" className='logo' /></NavLink>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--6 main-menu">
                  <ul>
                    <li><a>{prop.li1}</a></li>
                    <li><a>{prop.li2}</a></li>
                    <li><a>{prop.li3}</a></li>
                    <li><a>{prop.li4}</a></li>
                  </ul>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 sign-in">
                  <ul>
                    <li><img src={prop.icon1} alt="Search" className='img-1' /><span>{prop.text1}</span></li>
                    <li className='Signin'><img src={prop.icon2} alt="User" className='img-2' /><span>{prop.text2}</span></li>
                    <NavLink exact to='/cart'>
                      <li><img src={prop.icon3} alt="User" className='img-3' />{totalCartItem}</li>
                    </NavLink>
                  </ul>
                </div>
              </>
            )
          })
        }

      </nav>
      <hr />
    </>
  )
};


export default NAvbar
