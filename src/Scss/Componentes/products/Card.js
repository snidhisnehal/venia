import React from 'react'
import {Link} from 'react-router-dom'
import Heart from '../../../Images/heart.svg'
import Pagination from 'react-js-pagination';
import { useState } from "react";


export default function Card({data}) {
    // let productTitle = title.split(' ').slice(0,3).join(' ');
    
    
    const [page, setPage] = useState(1);

    const [cardsPerPage]=useState(6);
 
    const lastcardIndex =page * cardsPerPage;
    const firstcardIndex = lastcardIndex - cardsPerPage;
    const currentData= data.slice(firstcardIndex,lastcardIndex);

    const paginate = pageNumber => setPage(pageNumber);
    console.log(data.length);
       
        return (
            <>
            <div className='aem-Grid aem-Grid--12 aem-Grid--phone--12 body-container'>
          <p>{data.length}Results</p>
          <select>
            <option>Sort by Latest</option>
            <option>Sort by price</option>
          </select>
        </div>
            {currentData.map((prod) => {
                 let productTitle = prod.title.split(' ').slice(0,3).join(' ');
                let id=prod.id;
                return(
            <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 card '>
                <Link to={`/products/${id}`} className="product-text">
                <div className='product-image'>
                    <img src={prod.image} alt="cardimage"/>
                </div>
                <div className='product-details'>
                    <b className='product-title'>{productTitle}</b>
                    <p className='product-price'>${prod.price}</p>
                     <img className='fav_icon' src={Heart } alt="Heartsvgimage"/> 
                </div>
                </Link>

            </div>)
            })}
            <div className='pagination'>
            <Pagination
            activePage={page}
            itemsCountPerPage={9}
            totalItemsCount={data.length}
            pageRangeDisplayed={5}
            onChange={paginate}
          /> 
          </div>
          </>
          )
    }


