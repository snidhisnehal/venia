import React from 'react';

import { List } from './Data/Data';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Toggle from '../../Images/align-justify.svg';



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

               

                {/* <div className="aem-GridColumn aem-GridColumn--default--2 logo"><span className="logo-one-text">V</span><span class=" ">ENIA</span></div> */}
                <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 logo-align aem-GridColumn--phone--6">
                 
               <a className='toggle ' href="" style={{paddingTop:"2px", paddingRight:"47px"}}>
                 <img src={Toggle} style={{width:"20px", height:"20px"}}/>
              
                </a>
                  <NavLink to='/'><img src={prop.Logo} alt="Logo" className='logo' /></NavLink>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--hide main-menu">
                  <ul>
                    <li><a href='#'>{prop.li1}</a></li>
                    <li><a href='#'>{prop.li2}</a></li>
                    <li><a href='#'>{prop.li3}</a></li>
                    <li><a href='#'>{prop.li4}</a></li>
                  </ul>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4  aem-GridColumn--phone--6 sign-in">
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
      
    </>
  )
};


export default NAvbar
