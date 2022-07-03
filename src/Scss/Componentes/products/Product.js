import React, { useEffect, useState } from 'react'
import Card from './Card';

const Product = () => {
    const [data, setData] = useState([]);
    
    const fetchData = () => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
        console.log(data)
    }

   

     useEffect(() => {
         fetchData()
     }, [])
    return (

        
        <div className='aem-Grid aem-Grid--12 card-container'>
            
            
        {/* {data.map(val => { */}
          
        {/* //   <Card key={val.id} id={val.id} img={val.image} title={val.title} price={val.price} /> */}
        <Card data={data}/>
          
        
        

      </div>
    )
}

export default Product
