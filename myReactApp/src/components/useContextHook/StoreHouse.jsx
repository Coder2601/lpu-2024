import React, { createContext, useState } from 'react'

export const storeContext = createContext();

const StoreHouse = ({children}) => {

    const[score, setScore] = useState(1);
    const[msg,setMsg] = useState("Welcome onboard!");

    const handleIncScore=()=>{
        setScore(score+1)
    }

    const handleDecScore = ()=>{
        setScore(score-1)
    }
    
    const contextValue = {score, handleDecScore, handleIncScore, setScore,msg}

  return (
    <storeContext.Provider value={contextValue}>
        {children}
    </storeContext.Provider>
  )
}

export default StoreHouse