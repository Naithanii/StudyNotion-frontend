import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-toastify';

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

      <Link to="/" >
      <img src={logo} alt='Logo' height={32} width={160}loading="lazy" />
      </Link>

      <nav>

        <ul className='flex gap-3 text-white gap-x-6'>

          <li>
            <Link to= "/">Home</Link>
          </li>
         <li>
            <Link to= "/#">About</Link>
          </li>
          <li>
            <Link to= "/#">contact</Link>
          </li>
        </ul>

      </nav>

      {/* 4 buttons */}

      <div className='flex items-center gap-x-4 text-white ml-12 gap-7  '>
        {/* { !isLoggedIn &&
        <Link to="/" >
          home
        </Link>
        } */}

        {!isLoggedIn &&
        <Link to="/Signup" >
          <button onClick={ ()=>{
            setIsLoggedIn(false);
            toast.success("log successfully") 
          }} className='bg-richblack-800 text-richblack-100 py-[9px] px-[12px] rounded-[8px] border-richblack-700'>
            Signup
          </button>
        </Link>
        }

        { !isLoggedIn &&
        <Link to="login" >
          <button className='bg-richblack-800 text-richblack-100 py-[9px] px-[12px] rounded-[8px] border-richblack-700'>Login</button>
        </Link>
        }

        { isLoggedIn &&
        <Link to="/" >
          <button onClick={ ()=>{
            setIsLoggedIn(false);
            toast.success("loged out successfully") 
          }} className='bg-richblack-800 text-richblack-100 py-[9px] px-[12px] rounded-[8px] border-richblack-700'>Logout</button>
        </Link>
        }

        { isLoggedIn &&
        <Link to="/Dashboard" >
          <button className='bg-richblack-800 text-richblack-100 py-[9px] px-[12px] rounded-[8px] border-richblack-700'>Dashboard</button>
        </Link>
        }

      </div>
      

    </div>
  )
}

export default Navbar
