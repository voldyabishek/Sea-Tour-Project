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
  
<div class="wrapper">
    <div class="title"><span>Login Form</span></div>
    <form action="#">
      <div class="row">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Email or Phone" required />
      </div>
      <div class="row">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" required />
      </div>
      <div class="pass"><a href="#">Forgot password?</a></div>
      <div class="row button">
        <input type="submit" value="Login" />
      </div>
      <div class="signup-link">i dont have account? <a onClick={()=>chanlogin(false)}>Signup now</a></div>
    </form>
  </div>

  :

    <div class="wrapper">
    <div class="title"><span>Login Form</span></div>
    <form action="#">
      <div class="row">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Email or Phone" required />
      </div>
      <div class="row">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" required />
      </div>
      <div class="pass"><a href="#">Forgot password?</a></div>
      <div class="row button">
        <input type="submit" value="Login" />
      </div>
      <div class="signup-link">Already have accoount- <a onClick={()=>chanlogin(true)}>Login Now</a></div>
    </form>
  </div>
  

  }
  </section>
  </>

  )
}

