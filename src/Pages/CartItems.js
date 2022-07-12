import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import edit from '../Images/edit-2.svg';
import trash from '../Images/trash-2.svg';
import heart from '../Images/heart.svg';
import down from '../Images/chevron-down.svg';
import PPBTN from '../Images/PP_BTN.png';
import { shipItem } from '../Scss/Componentes/Data/Data';
import { handleAction } from '../redux/counter/counterSlice';
import IncDecCount from '../Scss/Componentes/Cart/IncDecCount';
//Shopping Cart

const CartItems = () => {

    const cartData = useSelector((value) =>
        value.cart.item);
    const dispatch = useDispatch();
    // const removItem = (data) => {
    //     dispatch(handleAction.deletCartItem({ ...data }))
    //     console.log(data);
    // }
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

                                        <div className='cart-prod-img'><img src={value.image} alt='product'/></div>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--6 '>
                                        <div className='aem-Grid aem-Grid--12'>
                                            <div className=' aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 cart-prod-detail'>

                                                <b>{value.title}</b>
                                                <p>size:medium</p>
                                                <p>color:storm</p>
                                                <p>${value.price}</p>
                                            </div>
                                            {/* <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 btn'>
                                                <button className='btn-sub'>-</button>
                                                <button className='btn-count'>1</button>
                                                <button className='btn-sub'>+</button>
                                            </div> */}
                                            <IncDecCount/>
                                        </div>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--hide'>
                                        <div className='option'><img src={edit} alt='Edit'/><span>Edit item</span></div>
                                        <div className='option' onClick={()=>{return dispatch(handleAction.deletCartItem(value.id))}}>
                                                 <img src={trash} alt='remove' /><span>Remove</span></div>
                                        <div className='option'><img src={heart} alt='like'/><span>Save for later</span></div>
                                    </div>
                                </div>


                            </>
                        )
                    })}
                   { shipItem.map((todo) => {
        return (
                    <div className='aem-Grid aem-Grid--12 shipping'>
                        <div className='aem-GridColumn aem-GridColumn--default--10 '>
                            <div className='aem-Grid aem-Grid--12'>
                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'> 
                            <p>{todo.detail1}</p>
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                            <p><span>{todo.detail2}</span></p> 
                            </div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2'><img src={down} alt='down'/></div>

                        
                    </div>)})}
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
                    <div className='ppbtn'><img src={PPBTN} alt='button'/></div>

                </div>

            </div>
            
        </div>
    )
}

export default CartItems
