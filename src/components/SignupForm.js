import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';


const SignupForm = ({setIsLoggedIn}) => {

  const[formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""

  })

  const[showPassword, setShowPassword] = useState(false);
  const[showConfirmPassword, setShowConfirmPassword]= useState(false);
  const[accountType, setAccountType] = useState("student")
  const navigate = useNavigate();
  
  function changeHandler(event){

    setFormData( (prevData) =>(
      {
        ...prevData,
        [event.target.name]:event.target.value

      }
    ))

  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created GG")
    const accountData = {
      ...formData
    }

    const finalData = {
      ...formData,
      accountType 
    }

    console.log("Printing Details");
    console.log(finalData)
    navigate("/Dashboard")


  }


  return (
    <div className=''>
      
      {/* Student instructor table */}
      <div className='flex rounded-full my-6 border bg-richblack-800 p-2  gap-x-1 max-w-max'>
        
        <button
        onClick={ ()=> setAccountType("student")}
        className={`${accountType === "student" 
          ? 
          "bg-richblack-900 text-richblack-5"
          :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          
        >Student</button> 
        
        <button
          className={`${accountType === "instructor" 
            ? 
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={ ()=> setAccountType("instructor")}
          
        >Instructor</button>

      </div>

      <form onSubmit={submitHandler}>

      {/* FirstName and LastName */}
      <div className='flex justify-between mt-6'>
        <label>
          <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.37rem] mt-4'>First Name <sup className='text-red-600'>*</sup></p>
          <input required
          type='text'
          name='firstname'
          onChange={changeHandler}
          placeholder='Enter First Name'
          value={formData.firstname}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </label>
        <label>
          <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.37rem] mt-4'>Last Name <sup className='text-red-600'>*</sup></p>
          <input required
          type='text'
          name='lastname'  
          onChange={changeHandler}
          placeholder='Enter last name' 
          value={formData.lastname}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />    
        </label>
      </div>


      {/* email Add */}
        <label>
          <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.37rem] mt-4'>Email Address <sup className='text-red-600'>*</sup> </p>
          <input required
          name='email'
          type='email '
          value={formData.email}
          onChange={changeHandler}
          placeholder='Enter Your Email ID'
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

          />

        </label>


      {/*create Password and confirm password*/}
      <div className='flex justify-between'>
        <label className='relative'>
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
            className='absolute top-[55px] right-4 cursor-pointer'>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):
            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
          </span>

        </label>
        
        <label className='relative'>
          <p className='text-[0.87rem] text-richblack-5 mb-1 leading-[1.37rem] mt-4'>Confirm Password <sup className='text-red-600'>*</sup> </p>
          <input required
          name='confirmPassword'
          type= {showConfirmPassword ? ("text"): ("password")}
          value={formData.confirmPassword}
          onChange={changeHandler}
          placeholder='confirm Password'
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

          />
          <span onClick={()=> setShowConfirmPassword((prev) => !prev)}
            className='absolute top-[55px] right-4 cursor-pointer'>
            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
          </span>

        </label>
      </div>

      <button className='text-black font-semibold w-full bg-yellow-400 rounded-[8px] py-[12px] px-[12px] mt-10'>
        Create Account
      </button>



      </form>


    </div>
  )
}

export default SignupForm
