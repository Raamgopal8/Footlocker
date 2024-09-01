import React, { useContext } from 'react'
import '../Pages/CSS/Shopcategory.css'
import { ShopContext } from '../Contexts/ShopContext'

const Shopcategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className='shop-category'>
         <img src = {props.banner} alt ="" />
        </div>
    )
}

export default Shopcategory