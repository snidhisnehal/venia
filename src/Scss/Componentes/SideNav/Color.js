import React from 'react'
import { selectColor } from '../Data/Data'

const Color = () => {
  return (
    <div className='color'>
    <h6>Color</h6>
    <div className="filter-color">
      {selectColor.map((curElm)=>{
        return(
          <div
          key={curElm.id}
          className={curElm.className}
          style={{ backgroundColor:`${curElm.color}`,border:`${curElm.border}`}}
          >

          </div>
          
        )
      })

      }
        
    </div>
    </div>
      
   
  )
}

export default Color
