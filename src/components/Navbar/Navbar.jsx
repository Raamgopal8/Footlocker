import React, { useContext, useState } from 'react' 
import './Navbar.css'
import{ Link } from 'react-router-dom'
import logo from '../assests/logo.png'
import cart_icon from '../assests/cart_icon.png'


const Navbar = () => {
   const [menu,setMenu] = useState("shop");
   return(  
        <div className='navbar'>  
           <div className ="nav-logo">
            <img src = {logo} alt=""/>
            <p>FOOTSTOP</p>
           </div>
           <ul className = "nav-menu">
            
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration : 'none' }} to = '/'>Shop</Link>{menu ==="shop" ?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mens")}}><Link style={{ textDecoration : 'none' }} to ='/Mens'>Men</Link>{menu ==="Mens" ?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Womens")}}><Link style={{ textDecoration : 'none' }} to ='/Womens'>Women</Link>{menu ==="Womens" ?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{ textDecoration : 'none' }} to ='/Kids'>Kids</Link>{menu ==="Kids" ?<hr/>:<></>}</li>
           
           </ul>
           
           <div className = "nav-login-cart">
            <Link to = '/login'><button>Login</button> </Link>
            <Link to = '/cart'><img src = {cart_icon} alt="" /> </Link>
            
            <div className="nav-cart-count">0</div>
           
           </div>
        </div>

   )
}
export default Navbar 