import React from 'react'
// import Image from "../Images/Hero-Banner.png"
import { useSelector } from 'react-redux'

const CartItems = () => {
    const cartData = useSelector((value) =>
        value.cart.item);
    return (

        <div className='aem-Grid aem-Grid--12 container cart-Container'>
            <h1>Your Shopping Bag</h1>
            <div className='aem-Grid aem-Grid--12 container cart-Container'>
                {cartData.map((value) => {
                    return (
                        <>
                            {/* <h1>{value.title}</h1>
                                <img src={value.image} style={{width:"100px", height:"100px"}} alt=''/> */}
                            <div className='aem-GridColumn aem-GridColumn--default--8 '>
                                <div className='aem-Grid aem-Grid--12 cart-products'>
                                    <div className='aem-GridColumn aem-GridColumn--default--6 added-product'>
                                        <div><img src={value.image}  /></div>
                                        <div>
                                            {/* <p>{value.title?.split(' ').slice(0,3).join(' ')}</p> */}
                                            <p>${value.price}</p>
                                        </div>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--3 btn'>
                                        <button className='btn-sub'>-</button>
                                        <button className='btn-count'>1</button>
                                        <button className='btn-sub'>+</button>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--3 '>
                                        <div className='option'>Edit item</div>
                                        <div className='option'>Remove</div>
                                        <div className='option'>Save for later</div>
                                    </div>
                                </div>
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--4 pricing-total'>
                                <h4>Pricing Summary</h4>
                                <p>Subtotal <span>$ 388.00</span></p>
                                <p>Coupon <span>- $ 77.60</span></p>
                                <p>Estimated tax <span>- $ 100.00</span></p>
                                <p>Estimated shipping <span>$ 23.28</span></p>
                                <p>Estimated shipping <span>FREE</span></p>
                                <p>Estimated Total <span>$ 233.68</span></p>
                                
                            </div>
                        </>
                    )
                })}

            </div>
            {/* <div className='aem-GridColumn aem-GridColumn--default--8 '>
            <div className='aem-Grid aem-Grid--12 cart-products'>
            <div className='aem-GridColumn aem-GridColumn--default--6'><img src={value.image} style={{height:"100px"}}/></div>
            <div className='aem-GridColumn aem-GridColumn--default--3'>
                <button className='btn-sub'>-</button>
                <button className='btn-count'>1</button>
                <button className='btn-sub'>+</button>
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--3 '>
                <div className='option'>Edit item</div>
                <div className='option'>Remove</div>
                <div className='option'>Save for later</div>
            </div>
            </div>
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--4'>4</div> */}
        </div>
    )
}

export default CartItems
