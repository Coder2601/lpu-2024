import React, { useContext, useState } from 'react'
import { storeContext } from './StoreHouse';

const Doubles = () => {
  const {score} = useContext(storeContext);
  const[dbl,setDbl] = useState(score);

  return (
    <div>
      <h1>Doubles Component</h1>
      <p>Score : {dbl}</p>
      <button onClick={()=>setDbl(dbl*2)}>Double the score</button>
    </div>
  )
}

export default Doubles