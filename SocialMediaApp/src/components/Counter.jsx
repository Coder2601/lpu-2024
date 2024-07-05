// Shortcut to create component : rafce

import React, { useState } from 'react'

const Counter = () => {

    let [name, setName] = useState("Suraj");
    let[count, setCount] = useState(0);

    const handleDec=()=>{
        setCount(count-1);
    }

    const handleInc=()=>{
        setCount(count+1);
    }

  return (
    <>
        <h1>User : <i className='vals'>{name}</i></h1>
        <h2>Count Value : <i className='vals'>{count}</i></h2>
        <button onClick={handleInc}>Increase Count</button>
        <button onClick={handleDec}>Decrease Count</button>
        <br />
    </>
  )
}

export default Counter;