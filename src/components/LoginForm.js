import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = ({setLoggedIn}) => {
  const navigator = useNavigate();
  const passRef = useRef(null);
  function handleIcon1() {
    setShow1(!show1);
  }
  function submitHandler(event) {
    toast.success("logged in");
    event.preventDefault();
    toast.success("Use Logged In");
    setLoggedIn(true);
    
  }
  const [show1, setShow1] = useState(false);
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  function changeHadler(event) {
    setFormData({ ...FormData, [event.target.name]: event.target.value });
  }
  return (
    <div >
      <form onSubmit={submitHandler} >
      <div >
          <label className="space-y-1">
            <p className="text-richblack-5 mt-4 text-[.875rem]">Email Address <sup className="text-pink-200">*</sup></p>
            <input
              required
              type="email"
              placeholder="Enter Email Address"
              className="bg-richblack-800 w-full rounded-lg px-3 py-3 border-b border-richblack-200 active:border-blue-600 placeholder:text-[1.01rem]"
              name="email"
              value={FormData.email}
              onChange={changeHadler}
              ></input>
          </label>
        </div>
      <div className="w-full">
        <label className="space-y-1 relative" >
          <p className="text-richblack-5 text-[.875rem] mt-4">Password <sup className="text-pink-200">*</sup></p> 
          <input
            required
            type={show1 ? "text" : "password"}
            placeholder="Enter Password"
            className="bg-richblack-800 w-full rounded-lg px-3 py-3 border-b border-richblack-200 active:border-blue-600 placeholder:text-[1.01rem]"
            name="password"
            id="password"
            value={FormData.password}
            onChange={changeHadler}
            ref={passRef}
          ></input>
          <span 
          className="absolute top-[33px] text-richblack-200 right-3 text-[1.35rem]"
          onClick={handleIcon1}>
            {show1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
        <p className="text-blue-400 ml-auto mr-0 max-w-max text-[0.8rem ]">Forgot password</p>
      </div>
      <div>
        <button className="bg-yellow-50 w-full mt-8 mb-4 p-2 rounded-lg" >Sign In</button>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;
