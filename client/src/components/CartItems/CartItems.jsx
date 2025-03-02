import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Contexts/ShopContext'
import remove_icon from '../assests/cart_cross_icon.png'

const CartItems = () => {
  const{getTotalCartAmount,all_product , cartItems,removeFromCart} = useContext(ShopContext);  
  
    return (
    <div className='cartitems'>
               <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
               </div>
               <hr/>
               {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src ={e.name} alt = "" className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>RS{e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>RS{e.new_price*cartItems[e.id]}</p>
                        <img className = 'cartiems=remove-icon' src={remove_icon} onClick ={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                   </div>
                }
                return null;
               })}
               <div className="cartitem-down">
                <div className="cartitems-total">
                    <h1>CART TOTAL</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>RS{getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>SHIPPING FEE</p>
                            <p>FREE</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>TOTAL</h3>
                            <h3>RS{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>ENTER PROMOCODE</p>
                    <div className="promobox">
                        <input type='text' placeholder='promocode'/>
                        <button>APPLY</button>
                    </div>
                </div>
               </div>
        </div>
  )
}

export default CartItems