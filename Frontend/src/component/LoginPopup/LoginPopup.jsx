import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const[currState,setCurrState]=useState("login")
  return (
    <div className='login-popup'>
    <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState ==="login"?<></>: <input type="text"placeholder='Your name' required/>}
           
            <input type="email"placeholder='Your email' required/>
            <input type="password"placeholder='Password'required />
        </div>
        <button>{currState==="sign up"?"create account":"login"}</button>
        <div className="login-popup-condition">
            <input type="checkBox" required />
            <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        <div>
            {
                currState==="login"?<p >Create a new account ? <snap id="click" onClick={()=>setCurrState("sign up")}>Click here</snap></p>
                                   :<p>Already have an account ? <span onClick={()=>setCurrState("login")}>Login here</span></p>
            }
            
            
        </div>
    </form>
    </div>
  )
}

export default LoginPopup
