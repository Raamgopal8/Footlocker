import React from 'react';
import '../Pages/CSS/LoginSignup.css';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign up</h1>
                <div className="loginsignup-fields">
                    <input type = "text" placeholder='Your Name'/>
                    <input type = "email" placeholder=' Email'/>
                    <input type = "password" placeholder='Password'/>

                </div>
         <Link to = "/"> <button>Continue</button> </Link>
                <p className="loginsignup-login">Already have an account?<span>Login Here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name ='' id = '' />
                <p>By Continuing ,I agree to terms and conditions.</p>
            </div>
            </div>

        </div>
    )
}

export default LoginSignup