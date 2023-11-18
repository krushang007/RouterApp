import React from "react";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";
import { Link} from "react-router-dom";

const Navbar = ({ setLoggedIn, isLoggedIn }) => {
  return (
    <div className="flex flex-row justify-between max-w-[1160px] text-richblack-25  leading-3 mx-auto py-4 w-11/12 items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[160px] h-[32px]"></img>
      </Link>
      <div>
        <ul className="flex flex-row gap-6 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="#">About</Link>
          </li>

          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </div>
      <nav className="flex flex-row gap-4">
      {!isLoggedIn && (
          <Link to="/login">
            <button className="text-richblack-200 leading-4 bg-richblack-800 border border-richblack-700  p-3 rounded-lg font-semibold text-[16px] ">Log In</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to='/signup'>
            <button className="text-richblack-200 leading-4 bg-richblack-800 border border-richblack-700  p-3 rounded-lg font-semibold text-[16px] ">Sign Up</button>
          </Link>
        )}
        
        
         {isLoggedIn && (
          <Link to="/">
            <button
            className="text-richblack-200 bg-richblack-800 leading-4 border border-richblack-700  p-3 rounded-lg font-semibold text-[16px] "
            onClick={()=>
            {
                setLoggedIn(false);
                toast.success("Logged Out");
            }}>LogOut</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="text-richblack-200 bg-richblack-800 leading-4 border border-richblack-700  p-3 rounded-lg font-semibold text-[16px] ">Dashboard</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
