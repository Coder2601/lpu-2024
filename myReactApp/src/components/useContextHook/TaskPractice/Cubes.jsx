import React, { useContext } from 'react'
import { calculusContext } from './TaskStore'

const Cubes = () => {
  const {count, showCubes, setShowTables, setShowCubes} = useContext(calculusContext)

  const handleTables=()=>{
    setShowTables(true);
    setShowCubes(false);
  }


  return (
    showCubes?<>
      <h2>Cubes</h2>
      <br /><hr /><br />
      <p>Here is your Perfect Cube : {count**3}</p>
      <br /><br />
      <button onClick={handleTables}>Learn Tables</button>
  </>:null
  )
}

export default Cubes