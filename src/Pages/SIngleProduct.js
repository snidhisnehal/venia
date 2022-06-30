import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SingleItem from '../Scss/Componentes/products/SingleItem';

const SIngleProduct = () => {
    // const dispatch=useDispatch();
    // const addProduct =(product)=>{
    //     dispatch(handleAction.additem(...product))
    //     console.log(product);
    // }
     const [data, setData] = useState([]);
     const { id } = useParams();
     const fetchData = () => {
         fetch(`https://fakestoreapi.com/products/${id}`)
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
    }, [id])
    return (
        <div>
           <SingleItem key={data.id} data={data} id={data.id} img={data.image} title={data.title} price={data.price} description={data.description}/>
        </div>
    )
};

export default SIngleProduct
