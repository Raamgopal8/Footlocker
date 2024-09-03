import React, { useContext } from 'react'
import '../Pages/CSS/Shopcategory.css'
import dropdown_icon from '../components/assests/dropdown_icon.png'
import { ShopContext } from '../Contexts/ShopContext'
import Items from '../components/Items/Items'
import all_products from '../components/assests/all_product'

const Shopcategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className='shop-category'>
         <img src = {props.banner} alt ="" />
         <div className="shopcategor-index">
            <p>
                <span>Showing Products</span>
            </p>
            <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt="" /> 
            </div>
         </div>
         <div className="shopcategory-products">
            {all_products.map((items,i) => {
                if(props.category===items.category){
                 return <Items key ={i} id ={items.id} name = {items.name} image = {items.image} new_price ={items.new_price} old_price={items.old_price}/>
                }
                else{
                    return null;
                }
            })}
         </div>
        </div>
    )
}

export default Shopcategory