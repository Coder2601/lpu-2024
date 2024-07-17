import React, { useState } from 'react'
import CompB from './CompB';

const CompA = () => {
    const[heading,setHeading] = useState("Hello World");
    const[bio,setBio] = useState({name:"",password:""});

    const handleChange=(e)=>{
        setBio(bio=>({...bio,[e.target.id]:e.target.value}))
    }

  return (
    <div>
        <h2>Comp A</h2>
        <h4>{heading}</h4>
        <input type="text" id="name" onChange={handleChange}/>
        <input type="text" id="password" onChange={handleChange}/>
        
        <br /><hr />
        <CompB bio={bio} setBio={setBio} handleChange={handleChange} />
    </div>
  )
}

export default CompA