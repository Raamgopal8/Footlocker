import React from 'react'
import './Hero.css'
import foot_icon from '../assests/foot_icon.jpg'

const Tero = () => {
    return (
        <div className = 'hero'>
         <div className ="hero-left">
         <h2> Small Steps Makes Huge Miles </h2>
         <div> 
            <div className = "foot-foot-icon">
                <p>New</p>
            </div>
            <p> Collections</p>
            <p>for Everyone's</p>
            <p>Success Story</p>
            
            </div>
         </div>
         
         <div className="hero-right">
            <img src={foot_icon} alt="" />
             </div>
        </div>
    )
}

export default Tero