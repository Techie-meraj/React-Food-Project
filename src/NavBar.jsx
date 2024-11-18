import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Popmeals from './Popmeals';
import Meals from './Meals';
import Dessert from './Dessert';

const NavBar = () => {
    const [name,setName] = useState(false)
    const navigate=useNavigate()
    function Change(){
       setName(true)
       
    }
    function Change1(){
        setName(false)
        navigate('/home')
    }
    
  
  return (
    <>
   


    <div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        <li ><Link to={'/home'} onClick={Change1}>Home</Link></li>
        <li>
          <Link to={'/meals'}>Meals</Link>
         </li>
        <li>
          <Link to={'/pop'}>Popular-Meals</Link>
         </li>
         <li>
          <Link to={'/dessert'}>Desserts</Link>
         </li>
        </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/home'} onClick={Change1}>Home</Link></li>
      
      <li><Link to={'/meals'}>Meals</Link></li>
      <li>
          <Link to={'/pop'}>Popular-Meals</Link>
      </li>
      <li>
          <Link to={'/dessert'}>Desserts</Link>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn"onClick={Change}>{ name ? "Log-Out" :"Log-In" }</a>
  </div>
</div>



</>
)
}

export default NavBar