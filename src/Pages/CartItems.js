import React from 'react'
import { useSelector } from 'react-redux';
import edit from '../Images/edit-2.svg';
import trash from '../Images/trash-2.svg';
import heart from '../Images/heart.svg';
import down from '../Images/chevron-down.svg';
import PPBTN from '../Images/PP_BTN.png';

//Shopping Cart

const CartItems = () => {

    const cartData = useSelector((value) =>
        value.cart.item);

    return (

        <div className='aem-Grid aem-Grid--12 container cart-Container'>
            <h1>Your Shopping Bag</h1>
            <button className='bar2'></button>
            <div className='aem-Grid aem-Grid--12 container cart-Container'>
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12  '>

                    {cartData.map((value) => {

                        return (
                            <>

                                <div className='aem-Grid aem-Grid--12 cart-products aem-Grid--phone--12'>
                                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6 added-product'>

                                        <div className='cart-prod-img'><img src={value.image} /></div>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--6 '>
                                        <div className='aem-Grid aem-Grid--12'>
                                            <div className=' aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 cart-prod-detail'>

                                                <b>{value.title}</b>
                                                <p>size:medium</p>
                                                <p>color:storm</p>
                                                <p>${value.price}</p>
                                            </div>
                                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 btn'>
                                                <button className='btn-sub'>-</button>
                                                <button className='btn-count'>1</button>
                                                <button className='btn-sub'>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--hide'>
                                        <div className='option'><img src={edit} /><span>Edit item</span></div>
                                        <div className='option'><img src={trash} /><span>Remove</span></div>
                                        <div className='option'><img src={heart} /><span>Save for later</span></div>
                                    </div>
                                </div>


                            </>
                        )
                    })}
                    <div className='aem-Grid aem-Grid--12 shipping'>
                        <p>Estimate your Shipping<span>Shipping to 91001 <img src={down}/></span></p>
                        <p>Enter a Coupon Code<span>20% discount applied<img src={down}/></span></p>
                        <p>Apply Gift Card<span></span><img src=''/></p>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12  pricing-total'>
                    <h4>Pricing Summary</h4>
                    <p>Subtotal <span>$ 388.00</span></p>
                    <p>Coupon <span>- $ 77.60</span></p>
                    <p>Estimated tax <span>- $ 100.00</span></p>
                    <p>Estimated shipping <span>$ 23.28</span></p>
                    <p>Estimated shipping <span>FREE</span></p>
                    <p>Estimated Total <span>$ 233.68</span></p>
                    <button className='Primary-brand'>CHECKOUT</button>
                    <div className='ppbtn'><img src={PPBTN}/></div>

                </div>

            </div>
            
        </div>
    )
}

export default CartItems
