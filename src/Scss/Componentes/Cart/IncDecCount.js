import React from 'react';
import {useState} from "react";

const IncDecCount = () => {
 
    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
    
  return (
    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 btn'>
      <button type="button" className='btn-sub' onClick={decNum}>-</button>
      {/* <button className='btn-count' onChange={handleChange}>1</button> */}
      <input type="text" className='btn-count' value={num} onChange={handleChange} style={{textAlign:"center"}}/>
      <button type="button" className='btn-sub' onClick={incNum}>+</button>
    </div>
  )
}

export default IncDecCount
