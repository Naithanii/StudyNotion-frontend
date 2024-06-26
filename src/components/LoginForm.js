import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';





const LoginForm = ({setIsLoggedIn}) => {

  const [formData, setFormData] = useState(
  {email:"", password:""}
  )
  
  const[showPassword, setShowPassword] = useState(false);

  function changeHandler(event){
    setFormData((prevData) =>( {
      ...prevData,
    [event.target.name]:event.target.value 
    }
  )) 
  }

  const navigate = useNavigate();

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log("printing the form data")
    console.log(formData)
    navigate("/dashboard")
  }

  return (
    <div className='flex flex-col w-full gap-y-4 mt-6 '>
      <form onSubmit={submitHandler} >
        <label className='w-full '>
          <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.37rem]'>Email Address <sup className='text-red-600'>*</sup> </p>
          <input required
          name='email'
          type='text'
          value={formData.email}
          onChange={changeHandler}
          placeholder='Enter Your Email ID'
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

          />

        </label>

        <label className='w-full relative '>
          <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.37rem] mt-4'>Password <sup className='text-red-600'>*</sup> </p>
          <input required
          name='password'
          type= {showPassword ? ("text"): ("password")}
          value={formData.password}
          onChange={changeHandler}
          placeholder='Enter Password'
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 

          />
          <span onClick={()=> setShowPassword((prev) => !prev)}
            className='absolute top-[88px] right-4 cursor-pointer'>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'  />)}
          </span>
          
          <Link to="#">
            <p className='text-sx text-blue-200 mt-1 max-w-max ml-auto' >
              Forgot Password
            </p>
          </Link>

        </label> 

        <button className='text-black w-full bg-yellow-400 rounded-[8px] py-[12px] px-[12px] mt-6'>
          SignIn
        </button>

      </form>

    
     <ToastContainer />

    </div>
  )
}

export default LoginForm
