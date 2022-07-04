import React from 'react';
import Image from "../../Images/Hero-Banner.png"

const HeroBanner = () => {
  return (
    <section className='aem-Grid aem-Grid--12 aem-Grid--phone--12 container header'>
        <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 hero-container'>
          
            <h1>Women’s</h1>
            <h1 className='subheader'> Outerwear</h1>
            <button className='bar '></button>
            
            
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12'>
          
            <img src={Image} alt='' className=' hero-image'/>
            
        </div>
      
    </section>
  )
}

export default HeroBanner
