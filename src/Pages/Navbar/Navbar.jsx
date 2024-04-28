import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import './Navbar.css'
import 'animate.css';

const Navbar = () => {

 

  const {user , logOut} = useContext(AuthContext);
  

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }
  


  const navLinks = <>
  <li><NavLink to='/'>Home</NavLink></li>
  
     <li><NavLink to='/alltouristspot'>All Tourists Spot</NavLink></li>
    
  <li><NavLink to='/addtouristspot'>Add Tourists Spot</NavLink></li>
 
    <li><NavLink to='/mylist'>My List</NavLink></li>

  
  </>
  return (
    <div className="pb-10 pt-8" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
     <div className="container mx-auto ">
     <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-inherit font-semibold text-white">
        
        {navLinks}
      </ul>
    </div>
    <h2 className="font-bold text-2xl text-orange-400 animate__animated animate__backInLeft">TrekTales</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 font-semibold text-white">
      
  {navLinks}
    </ul>
  </div>



  <div className="navbar-end gap-4">
  <div className="avatar">
    {user && (
       <div className="w-12 rounded-full ">
       <img src={user.photoURL}/>
       <span className="tooltip">
        {user.displayName}
        </span> 
     </div>
    )}
     
</div>
    {
      user ? 
      <button  className="btn bg-gray-400 bg-opacity-70  border-0 text-white hover:text-black hover:bg-white duration-700" onClick={handleSignOut}>Sign Out</button>
      : <div className="flex gap-4"><Link to='/login'><button className="btn bg-gray-400 bg-opacity-70  border-0 text-white hover:text-black hover:bg-white duration-700">Login</button></Link> 
      <Link to='/register'><button className="btn bg-gray-400 bg-opacity-70  border-0 text-white hover:text-black hover:bg-white duration-700">Register</button></Link></div>
    }
    
  </div>


</div>
     </div>
    </div>
  );
};

export default Navbar;