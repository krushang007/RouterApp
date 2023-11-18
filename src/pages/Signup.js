import React from 'react'
import Template from '../components/Template';
import img from '../assets/signup.png'
const Signup = ({isLoggedIn,setLoggedIn}) => {
  return (
    <div>
        <Template isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} heading="Join the millions learning to code with StudyNotion for free"
         desc1="Build skills for today, tomorrow , and beyond." desc2="Education to future-proof your career." img={img} formtype="signup"></Template>
    </div>
  )
}

export default Signup;