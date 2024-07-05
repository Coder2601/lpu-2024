import React from 'react'

const Multiplier = ({count, setCount}) => {
  return (
    <div>
        <h2>Multiplier Component</h2>
        <button onClick={()=>setCount(count*2)}>x2</button>
        <button onClick={()=>setCount(1)}>Reset</button>
    </div>
  )
}

export default Multiplier