import React from "react";
import './Popular.css'
import data from "../assests/data.js";
import Items from "../Items/Items";

const Popular = () => {
    return (
        <div className='popular'>
          <h1>Latest Branding</h1>
          <hr />
          <div className="popular-item">
            {data.map((items,i) => { 
            return <Items key ={i} id ={items.id} name = {items.name} image = {items.image} new_price ={items.new_price} old_price={items.old_price}/> 
            })} 
          </div>
        </div>
        )
}

export default Popular