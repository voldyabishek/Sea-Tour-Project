import React,{useState} from 'react'

import "../CssComponents/Login.css"
//  fontawsome icons




export const Login = () => {
  const [islogin,chanlogin]=useState(true)
  return (
<>
{/* try2 */}
<section id='signupform'>
{islogin?
  
<div className="wrapper">
    <div className="title"><span>LOGIN</span></div>
    <form action="#">
      <div className="row">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Email or Phone" required />
      </div>
      <div className="row">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" required />
      </div>
      <div className="pass"><a href="#">Forgot password?</a></div>
      <div className="row button">
        <input type="submit" value="Login" />
      </div>
      <div className="signup-link">i dont have account? <button onClick={()=>chanlogin(false)}  className='Login-btn'>Signup now</button></div>
    </form>
  </div>

  :

    <div className="wrapper">
    <div className="title"><span>SIGN Up Now</span></div>
    <form action="#">
    <div className="row">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Enter your Name" />
      </div>
       
      <div className="row">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Set User Name" required />
      </div>
      

      <div className="row">
        <i className="fas fa-user"></i>
        <input type="text" placeholder=" Enter your Phone Number" required />
      </div>
      
      <div className="row">
        <i className="fas fa-user"></i>
        <input type="text" placeholder=" Enter your Email Id" required />
      </div>

      <div className="row">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder=" Set Password" required />
      </div>
      <div className="pass"><a href="#">Forgot password?</a></div>
      <div className="row button">
        <input type="submit" value="Sign Up" />
      </div>
      <div className="signup-link">Already have accoount-  <button onClick={()=>chanlogin(true)}  className='Login-btn'> Login Now </button></div>
    </form>
  </div>
  

  }
  </section>
  </>

  )
}

