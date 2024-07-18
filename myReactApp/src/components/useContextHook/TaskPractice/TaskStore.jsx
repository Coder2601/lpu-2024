import React, { createContext, useState } from 'react'

export const calculusContext = createContext();

const CalculusStore = ({ children }) => {

  const [count, setCount] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCubes, setShowCubes] = useState(false);
  const [showTables, setShowTables] = useState(false);

  const contextValue = {
    count,
    setCount,
    showCubes,
    setShowCubes,
    showTables,
    setShowTables,
    showWelcome,
    setShowWelcome
  }
  return (
    <calculusContext.Provider value={contextValue}>
      {children}
    </calculusContext.Provider>
  )
}


export default CalculusStore