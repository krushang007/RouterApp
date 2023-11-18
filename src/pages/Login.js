import React from 'react'
import img from '../assets/login.png'
import Template from '../components/Template';


const Login = ({isLoggedIn,setLoggedIn}) => {
  return (
    <div><div>
    <Template isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} heading="Welcome Back"
     desc1="Build skills for today, tomorrow , and beyond." desc2="Education to future-proof your career." img={img} formtype="login"></Template>
</div></div>
  )
}

export default Login;