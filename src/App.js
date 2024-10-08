import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';



import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from 'react';


function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);





  return (
    <div className='flex bg-richblack-900 w-screen h-screen text-white flex-col '> 

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    <Routes>

      <Route path="/" element = {<Home/>}/>
      <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn} />}/>
      <Route path="/signup" element = {<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element = {
        <PrivateRoute isLoggedIn= {isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
      }/>




    </Routes>


    
    <ToastContainer />
    </div>
  );
}

export default App;
