import React, { useEffect, useState } from 'react'

const SideEffect = () => {

    const[color,setColor] = useState("red");
    const[count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Hi user");
    },[count]);

  return (
    <div style={{color:color}}>
        <h2>Side-Effect</h2>
        <br /><hr />
        <button onClick={()=>setColor("black")}>Change Color</button>
        <button onClick={()=>setCount(count+2)}>Increase Count : {count}</button>
    </div>
  )
}

export default SideEffect