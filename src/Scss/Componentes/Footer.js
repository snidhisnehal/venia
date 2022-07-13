import React from 'react'
import { List2 } from './Data/Data'

const Footer = () => {
  return (
    <>
    <hr className='bold'></hr>
    <footer className="aem-Grid aem-Grid--12 aem-Grid--phone--12 container main-footer">
    

    {
      List2.map((todo) => {
        return (
          <>
          <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
          <h6 className='foot-head'>{todo.header}</h6>
          <ul>
                
                <li>{todo.foot1}</li>
                <li>{todo.foot2}</li>
                <li>{todo.foot3}</li>
                <li><img src={todo.iconInst} className="img1" alt='Insta'/><img src={todo.iconFac} className="img2" alt="Facebook"/><img src={todo.iconTwit} className="img3" alt="Twitter"/></li>
              </ul>
          </div>
          
          </>
        )
      })
    }
        
 </footer>
 

 </>
  )
}

export default Footer
