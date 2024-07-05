import React, { useState } from 'react'
import DisplayCounter from './DisplayCounter';

const ChangeCounter = () => {
    
    const[count, setCount] = useState(0);
  
    return (

    <div>
        <h2>Change Counter Component</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>

        <DisplayCounter count = {count} setCount={setCount}/>
        
    </div>
  )
}

export default ChangeCounter;