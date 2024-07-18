import React, { useContext } from 'react'
import { storeContext } from './Store'

const CompA1 = () => {
    const {points, handleInc, handleDec} = useContext(storeContext);
  return (
    <div>
        <button onClick={handleInc}>Increase</button>
        <b>{points}</b>
        <button onClick={handleDec}>Decrease</button>
    </div>
  )
}

export default CompA1