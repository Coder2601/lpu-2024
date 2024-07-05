import React, { useState } from 'react'
import Home from './Home';
import Login from './Login';

const Main = () => {
    const[isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <button onClick={()=>setLoggedIn(!isLoggedIn)}>{isLoggedIn?"Logout": "Login"}</button>
    
    {isLoggedIn ? <Home />:<Login/>}


    </>
  )
}



// const Main=()=>{
//     const[isLoggedIn, setLoggedIn] = useState(false);

//     if(isLoggedIn){
//         return(
//             <>
//             <button onClick={()=>setLoggedIn(!isLoggedIn)}>LogOut</button>
//             <Home/>
//             </>
//         )
//     }else{
//         return(
//             <>
//             <button onClick={()=>setLoggedIn(!isLoggedIn)}>LogIn</button>
//             <Login/>
//             </>
//         )
//     }
// }

export default Main