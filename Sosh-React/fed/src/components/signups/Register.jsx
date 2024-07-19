import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const [regObj,setObj] = useState({});
  const [msg,setMsg] = useState("");
  const nav= useNavigate();

  const handleInput = (e)=>{
    setObj(val=>({...val,[e.target.id]:e.target.value}))
  }

  const handlePass = (e) =>{
    if(regObj.password == e.target.value){
      setMsg("Passwords Matched");
      document.getElementById("registerBtn").disabled = false;
    }else{
      setMsg("Passwords Didn't Match")
    }
  }
  const handleRegister=(e)=>{
    e.preventDefault();
    console.log(regObj);
    nav('/user/login')

    // backend req to send reg data
    // let result = await axios("http://localhost:5000/socialMedia/user/register",{
    //   method:"POST",
    //   headers:{'Content-Type':'application/json'},
    //   body: JSON.stringify(regObj)
    // })

    // if(result.data.status){
    //     alert(response.msg);
    //     nav('/user/login')
    // }else{
    //     alert("Regsitration Failed, Try Again");
    //     nav('/user/register');
    // }
    
  } 

  return (
    <>
      <h2>Register yourself here.</h2>
      <form onSubmit={handleRegister}>
          <label htmlFor="userId">User Id</label>
          <input type="text" id="userId" placeholder="User Id" onChange={handleInput} required />
          <br />
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" placeholder="First Name" onChange={handleInput} required />
          <br />
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" placeholder="Last Name" onChange={handleInput} required />
          <br />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" placeholder="Age" onChange={handleInput} required />
          <br />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Address" onChange={handleInput} required />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" onChange={handleInput} required />
          <br />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm-Password" onChange={handlePass} required />
          <br />
          <p id="msg">{msg}</p>
          <button id="registerBtn" onClick={handleRegister} disabled >REGISTER</button>
      </form>

      <br />
      <p>If you are already registered, <NavLink to={'/user/login'}>Login here</NavLink></p>
    </>
  )
}

export default Register