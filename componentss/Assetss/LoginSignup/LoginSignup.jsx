import React from 'react'
import '../LoginSignup/LoginSignup.css'
import { useState } from 'react'
import user_icon from '../LoginSignup/person.png'
import email_icon from '../LoginSignup/email.png';
import password_icon from '../LoginSignup/password.png'
const LoginSignup = () => {
  const [action,setAction]= useState("sign Up");
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className=''>underline</div>
      </div>
       <div className="inputs">
       {action==="Login"?<div></div>:<div className="input">
          <img scr={user_icon}alt=""/>
          <input type="text" placeholder="Name"/>
        </div>}
        
         <div className="input">
          <img scr={email_icon}alt=""/>
          <input type="email"  placeholder="Email Id"/>
        </div>
         <div className="input">
          <img scr={password_icon}alt=""/>
          <input type="password"  placeholder="Password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">forgot password? <span>click here</span></div>}
     
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit" } onclick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onclick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup;
