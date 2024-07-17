import React, { useContext, useState } from 'react'
import { storeContext } from './StoreHouse'

const Multiplex = () => {
  
  const {score} = useContext(storeContext);
  const[mul,setMul] = useState(score);

  const handleMul=(e)=>{
    setMul(mul*e.target.value)
  }
  return (
    <div>
      <h2>Multiplex</h2>
      <input type="number" id="val" placeholder='multiplier' onChange={handleMul} />
      <br />
      <h1><i>Multiplied Value = {mul}</i></h1>
    </div>
  )
}

export default Multiplex