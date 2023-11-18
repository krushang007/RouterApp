import React from 'react'
import design from '../assets/frame.png'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'

const Template = ({heading,desc1,desc2,img,formtype,isLoggedIn,setLoggedIn}) => {
  return (
    <div className='w-11/12 mx-auto max-w-[1160px] flex justify-between mt-12 '>
        {/* Form and other things */}
        <div className='w-[450px]'>
            <div>
            <h1 className='text-[1.875rem] w-full font-semibold tracking-normal leading-[2.3rem] text-richblack-5'>{heading}</h1>
            <p className='text-richblack-200 text-[1.125rem] mt-4'>{desc1}</p>
            <p className='text-blue-100 italic text-[1.125rem]'>{desc2}</p>
            </div>
            <div>
                {formtype==='signup'?(<SignUpForm isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></SignUpForm>):(<LoginForm isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></LoginForm>)}
            </div>
            <div className='flex flex-row items-center gap-2 text-richblack-200'>
                <div className='h-[1px] bg-richblack-200 w-full'></div>
                <span>OR</span>
                <div className='h-[1px] bg-richblack-200 w-full' ></div>
            </div>
            <div>
                <button className='w-full flex justify-center items-center gap-3 bg-transparent border border-richblack-200 mt-4 mb-10 text-richblack-5 rounded-lg p-2'><FcGoogle className='text-[1.2rem]' />
 Sign in with Google</button>
            </div>
        </div>
        {/* Image and filter */}
        <div className='max-w-[450px] relative'>
            <img alt='students' src={img} className='absolute -top-4 right-4'></img>
            <img alt='design' src={design}></img>
        </div>
    </div>
  )
}

export default Template;