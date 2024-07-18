import React, { useContext } from 'react'
import { storeContext } from './Store'

const CompA = () => {
    const {points} = useContext(storeContext)
  return (
    <div>
        <h2>This is CompA</h2>
        <p>The points are doubled here : {2*points}</p>
    </div>
  )
}

export default CompA