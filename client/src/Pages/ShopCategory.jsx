import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import dropdown_icon from '../components/assests/dropdown_icon.png';
import Items from "../components/Items/Items";
import all_product from '../components/assests/all_product';

const ShopCategory = (props) => {
    
    return (
        <div className = 'shop-category'>
         <img className = 'shopcategory-banner' src = {props.banner} alt ="" />
         <div className = "shopcategory-index">
            <p>
                <span>Showing Products In Stock </span>
            </p>
            <div className = "shopcategory-sort">
                Sort by <img src={dropdown_icon} alt="" /> 
            </div>
         </div>
        
         <div className = "shopcategory-products">
            {all_product.map((items,i)=>{
                if(props.category===items.category){
                 return <Items key ={i} id ={items.id} name = {items.name} image = {items.image} new_price ={items.new_price} old_price={items.old_price}/>
                }
                else{
                    return null;
                }
              }
             )
          }
         </div>
        </div>
    )
}
export default ShopCategory