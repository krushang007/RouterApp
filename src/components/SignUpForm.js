import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({setLoggedIn}) => {
    const passRef=useRef(null);
    const navigator = useNavigate();
    function handleIcon1()
    {
        setShow1(!show1);
    }
    function handleIcon2()
    {
        setShow2(!show2);
    }
    function submitHandler(event)
    {
        event.preventDefault();
        if(FormData.password!==FormData.confirm)
        {
            toast.error("Password are not same");
            passRef.current.focus();
            return;
        }
        const finalData={...FormData,userType};
        console.log(finalData);
        setLoggedIn(true);
        toast.success("Account Created");
        navigator("/dashboard");

    }
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const[userType,setUserType]=useState("student");
  const [FormData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm: "",
  });
  function changeHadler(event) {
    setFormData({ ...FormData, [event.target.name]: event.target.value });
  }
  return (
    <div >
      <form onSubmit={submitHandler}>
        <div 
        className="flex bg-richblack-800 w-full max-w-max p-1 rounded-full mt-5 border-b gap-2 border-richblack-200 ">
          <button onClick={(event)=>{
           event.preventDefault();
           setUserType("student");
          
          }}
          className={userType==="student"?("bg-richblack-900 text-white px-5 py-2 rounded-full"):("bg-transparent px-5 py-2 rounded-full transition-all text-richblack-200 duration-300")}
          >Student</button>
          <button
          className={userType==="instuctor"?("bg-richblack-900 text-white px-5 py-2 rounded-full"):("bg-transparent px-5 py-2 rounded-full transition-all  text-richblack-200  duration-300")}
          onClick={(event)=>{
            event.preventDefault();
            setUserType("instuctor");}}>Instuctor</button>
        </div>
        <div className="text-richblack-5 flex mt-6 gap-4 text-[.875rem]">
          <label className="space-y-1">
            First Name <sup className="text-pink-200">*</sup>
            <input
              required
              type="text"
              placeholder="Enter First Name"
              name="fname"
              value={FormData.fname}
              onChange={changeHadler}
              className="bg-richblack-800 w-full rounded-lg px-3 py-3 border-b border-richblack-200 active:border-blue-600 placeholder:text-[1.01rem]"
              ></input>
          </label>
          <label className="space-y-1">
            Last Name <sup className="text-pink-200">*</sup>
            <input
              required
              type="text"
              placeholder="Enter Last Name"
              className="bg-richblack-800 w-full rounded-lg px-3 py-3 border-b border-richblack-200 active:border-blue-600 placeholder:text-[1.01rem]"
              name="lname"
              value={FormData.lname}
              onChange={changeHadler}
            ></input>
          </label>
        </div>
        <div>
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
        <div className="text-richblack-5 flex mt-4 gap-4 text-[.875rem]">
          <label className="space-y-1 relative">
            Create Password <sup className="text-pink-200">*</sup>
            <input
              required
              type={show1 ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              id="password"
              className="bg-richblack-800 w-full rounded-lg px-3 py-3 border-b border-richblack-200 active:border-blue-600 placeholder:text-[1.01rem]"
              value={FormData.password}
              onChange={changeHadler}
              ref={passRef}
              ></input>
            <span 
            className="absolute top-[33px] right-3 text-[1.35rem]"
            onClick={handleIcon1}>
            {show1?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
            </span>
          </label>
          <label className="space-y-1 relative">
            Confirm Password <sup className="text-pink-200">*</sup>
            <input
              required
              type={show2 ? "text" : "password"}
              className="bg-richblack-800 w-full rounded-lg px-3 py-3 border-b border-richblack-200 active:border-blue-600 placeholder:text-[1.01rem]"
              placeholder="Confirm Password"
              name="confirm"
              value={FormData.confirm}
              onChange={changeHadler}
            ></input>
             <span
             className="absolute top-[33px] right-3 text-[1.35rem]"
             onClick={handleIcon2}>
            {show2?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
            </span>
          </label>
        </div>
        <div>
            <button className="bg-yellow-50 w-full mt-8 mb-4 p-2 rounded-lg" >Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
