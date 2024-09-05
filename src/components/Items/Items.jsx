import React from "react";
import './Items.css'


const Items = (props) => {
   return (
    <div className='item'>
      <img src={props.image} alt = "" />
       <p>{props.name}</p>
       <div className="item-prices"> 
       <div className="item-prices-new">
         RS{props.new_price}
       </div>
         <div className="item-prices-old">
        RS{props.old_price}
         
         </div>     
    </div>
    </div>
   )
}
export default Items