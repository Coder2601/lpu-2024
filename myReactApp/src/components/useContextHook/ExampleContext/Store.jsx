import React, { createContext, useState } from 'react'

export const storeContext = createContext();


const Store = ({children}) => {
    const[points, setPoints] = useState(10);
    const handleInc = ()=>{
        setPoints(points+10);
    }
    const handleDec=()=>{
        setPoints(points-5);
    }

    const contextValue = {points, handleInc, handleDec};

  return (
    <storeContext.Provider value={contextValue}>
        {children}
    </storeContext.Provider>
  )
}

export default Store