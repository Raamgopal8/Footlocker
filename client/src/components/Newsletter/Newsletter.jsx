import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
    <h1>GET Exclusive Offers On Your Email</h1>
    <p>Subscribe to out NewsLetter and stay updated</p>
    <div>
    <input type = "email" placeholder='Your Email id' required/>
    <button>Subscribe</button> 
    </div>
    </div>
    )
}

export default Newsletter