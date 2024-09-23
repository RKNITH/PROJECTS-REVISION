import React from 'react'
import './login.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const Login = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState('Sign Up')


    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />

                </div>
                <div className='login-popup-inputs'>
                    {currentState === 'Login' ? <></> : <input type='text' placeholder='Your Name' required />}

                    <input type='email' placeholder='Your Email' required />
                    <input type='password' placeholder='Your Password' required />
                </div>
                <button>{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required />
                    <p> By continuing, i agree to the terms of use and privacy policy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click Me</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Lgin here</span></p>}
            </form>

        </div>
    )
}

export default Login