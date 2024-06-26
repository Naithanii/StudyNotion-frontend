import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({title , desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex justify-between text-white w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 '>
        {/* Form part */} 
        <div className='w-11/12 max-w-[450px] mx-0 '>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.12rem] leading-[1.65rem] mt-4'>
            <span className='text-richblack-100 '>{desc1}</span>
            <br/>
            <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn} />):
            (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}


            <div className='flex w-full items-center my-4 gap-x-2'>
              <div className='bg-richblack-700 w-full h-[1px]'></div>
              <p className='text-richblack-700 font-medium leading-[1.37rem]'>Or</p>
              <div className='bg-richblack-700 w-full h-[1px]'></div>
            </div>

            <button className='flex items-center w-full justify-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6  '>
              <FcGoogle></FcGoogle>
              Signup with google 
            </button>

        </div>
        

        {/* */}
        <div className='relative max-w-[450px] w-11/12'>
          <img src={frameImage}
          alt='pattern'
          width={588}
          height={504}
          loading="Lazy"/>

          <img src={image}
          alt="Students"
          width={588}
          height={504}
          loading="Lazy"
          className='absolute -top-4 right-4'/>
          {/*  */}
        </div>
    </div>
  )
}

export default Template
