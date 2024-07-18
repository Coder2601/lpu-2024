import React from 'react'
import { clrScreen, genTable } from '../actions/calculusActions'
import { useDispatch, useSelector } from 'react-redux'

const Cubes = () => {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.vals.count);
  return (
    <div>
        <h2>Cube of count</h2>
        <hr />
        <p>Cube of the <b>{count}</b> is : <b>{count**3}</b></p>
        <br />
        <button onClick={()=>dispatch(clrScreen())}>Clear the room</button>
        <button onClick={()=>dispatch(genTable())}>Go to Tables</button>
    </div>
  )
}

export default Cubes