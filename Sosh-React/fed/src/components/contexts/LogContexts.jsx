import React, { createContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

export const logContext = createContext()

const LogContexts = (props) => {
    
    const nav = useNavigate();
    const[token,setToken] = useState();
    const[isLoggedIn, setLoggedIn] = useState(false);

    const handleLogout = ()=>{
        localStorage.removeItem("token");
        nav('/');
    }

    useEffect(()=>{
        setToken(localStorage.getItem("token"));
        // console.log(token);
        if(token){
            // async function authUser(){
            //     let result = await axios.post("http://localhost:5000/socialMedia/user/authToken",{
            //         headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`}});
            //     console.log(result);
            // }
            // let result = authUser();
            // if(result.status){
                setLoggedIn(true)
            // }
            // else{
            //     alert("Invalid Access! Try Logging Again");
            //     localStorage.removeItem("token");
            //     nav('/');
            // }
            
        }else{
            setLoggedIn(false);
        }
    },[token])

  return (
    <logContext.Provider value={{handleLogout,token, isLoggedIn, setLoggedIn}}>
        {props.children}
    </logContext.Provider>
  )
}

export default LogContexts