import React from "react";
import './Popular.css'
import all_product from "../assests/all_product";
import Items from "../Items/Items";

const Popular = () => {
    return (
        <div className='popular'>
          <h1>Latest Branding</h1>
          <hr />
          <div className="popular-item">
            {all_product.map((items,i) => { 
            return <Items key ={i} id ={items.id} name = {items.name} image = {items.image} new_price ={items.new_price} old_price={items.old_price}/> 
            })} 
          </div>
        </div>
        )
}

export default Popular