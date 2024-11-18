import React, { useContext} from 'react'
import './productdisplay.css'
import star_icon from "../assests/star_icon.png";
import star_dull_icon from "../assests/star_dull_icon.png";
import { ShopContext } from '../../Contexts/ShopContext';

const Productdisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="product">
          <div className="product-left">
            <div className="product-img-list">
               <img src = {product.image} alt = ""/>
               <img src = {product.image} alt = ""/>
               <img src = {product.image} alt = ""/>
               <img src = {product.image} alt = ""/>
          </div>
          <div className="product-img">
            <img className = 'product-main-img' src = {product.image} alt = ""/>
          </div>
        </div>
        <div className="product-right">
            <h1>{product.name}</h1>
            <div className="product-right-stars">
                <img src = {star_icon} alt = "" />
                <img src = {star_icon} alt = "" />
                <img src = {star_icon} alt = "" />
                <img src = {star_icon} alt = "" />
                <img src = {star_dull_icon} alt = "" />
                <p>(125)</p>
            </div>
            <div className="product-right-prices">
                <div className="product-right-prices-old">RS{product.old_price}</div>
                <div className="product-right-prices-new">RS{product.new_price}</div>
            </div>
            <div className="product-right-description">
                a casual shoes for everyone needs
            </div>
            <div className="product-right-size">
                <h1>Select size</h1>
                <div className="product-right-sizes">
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
            </div>
        </div>
        <button onClick ={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="product-right-cate"><span>Category:</span>MEN , SHOES , Formal , casual</p>
        <p className="product-right-cate"><span>Tags:</span>Modern , Good Quality , Trending</p>
        </div>
        </div>
    )
} 
export default Productdisplay