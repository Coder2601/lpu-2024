import React, { useContext } from 'react'
import { calculusContext } from './TaskStore'

const WelcomeScreen = () => {

    const {count, showWelcome, setShowWelcome, setShowCubes, setCount} = useContext(calculusContext)
    
    const handleHover=()=>{
      setCount(count+1);
    }
    const handleCubes=()=>{
        setShowWelcome(false);
        setShowCubes(true);
    }

  return (
    showWelcome?<div>
    <h2>WelcomeScreen</h2>
    <br />
    <hr />
    <br />
    <p onMouseOver={handleHover}>Cross me to enter the villa...</p>
    <br />
    <button>Persons entered : {count}</button>

    <br /><br />
    <button onClick={handleCubes}>Enter Cubes Room</button>
</div>:null
  )
}

export default WelcomeScreen