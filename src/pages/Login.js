import React, {useState} from 'react'
import Template from '../components/Template'
import loginImage from '../assets/login.png'


// error in login.js and signup.js


const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2 = "Education to future-proof your career."
      image = {loginImage}
      formtype ="login"
      setIsLoggedIn = {setIsLoggedIn}
    />
    
  )
}

export default Login
