import React from 'react';

import { List } from './Data/Data';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

 
const NAvbar = () => {
  const cartCounter = useSelector((value)=>{
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
            {/* <div className="aem-GridColumn aem-GridColumn--default--2 logo"><span className="logo-one-text">V</span><span class=" ">ENIA</span></div> */}
            <div className="aem-GridColumn aem-GridColumn--default--2 logo-align">
              <NavLink to='/'><img src={prop.Logo} alt="Logo" className='logo'/></NavLink>
              </div>

            <div className="aem-GridColumn aem-GridColumn--default--6 ">
              <ul>
                <li><a>{prop.li1}</a></li>
                <li><a>{prop.li2}</a></li>
                <li><a>{prop.li3}</a></li>
                <li><a>{prop.li4}</a></li>
              </ul>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4">
              <ul>
                <li><img src={prop.icon1} alt="Search" className='img-1'/>{prop.text1}</li>
                <li><img src={prop.icon2} alt="User" className='img-2'/>{prop.text2}</li>
                <NavLink exact to='/cart'>
                <li><img src={prop.icon3} alt="User" className='img-3'/>{totalCartItem}</li>
                </NavLink>
              </ul>
            </div>
            </>
          )
        })
      }
      
   </nav>
   <hr/>
   </>
  )
};


export default NAvbar
