import React, { useContext, useState } from 'react'
import { logContext } from '../contexts/LogContexts';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

const UserLogin = () => {
  const nav = useNavigate();
  const [userObj,setUser] = useState({});
  const {setLoggedIn} = useContext(logContext);

  const handleInput = (e)=>{
    setUser(userObj =>({...userObj, [e.target.id]:e.target.value}));
    
  }

  const handleLogin= async (e)=>{
    e.preventDefault();
    console.log(userObj);
    // const result = await axios.post("url",{
    //   headers:{'Content-Type':'application/json'},
    //   body:JSON.stringify(userObj)
    // })
    
    // if(result.status){
    //   setLoggedIn(true);
    //   // set token in localstorage
    //   nav('/posts');
    // }
    // else{
    //   alert("Error in Logging Process, Try Again!");
    //   nav('/user/login');
    // }
    nav('/posts');
    localStorage.setItem("token","serdxgcfhvcedfgvb");
    localStorage.setItem("logged_type","user");
    setLoggedIn(true);


  }

  return (
    <>
      <h2>Enter your valid credentials to login.</h2>
      <form>
        <label for="userId">User Id</label>
        <input type="text" id="userId" placeholder="User Id" onChange={handleInput} />
        <br />

        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" onChange={handleInput} />
        <br />

        <button id="loginBtn" onClick={handleLogin}>Login</button>
      </form>

      <p>If you do not have an account, <NavLink to={'/user/register'}>Register here</NavLink>.</p>
    </>

  )
}

export default UserLogin