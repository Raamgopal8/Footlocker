import React from 'react'
import './Tero.css'
import foot_icon from '../assests/foot_icon.jpg'

const Tero = () => {
    return (
        <div className = 'Tero'>
         <div className="Tero-left">
         <h2> Small Steps Makes Huge Miles </h2>
         <div> 
            <div className="foot-foot-icon">
                <p>new</p>
                <img src={foot_icon} alt="" />
            </div>
            <p> Collections</p>
            <p>for Everyone's</p>
            <p>Success Story</p>
         </div>
         </div>
                    
          
        </div>
    )
}

export default Tero