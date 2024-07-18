import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { genCube, genTable, incCount } from '../actions/calculusActions';
import Cubes from './Cubes';
import Tables from './Tables';

const Welcome = () => {
  const count = useSelector(state=>state.vals.count);
  const showStatus = useSelector(state=>state.vals);
  const dispatch = useDispatch();

  return (
    showStatus.showWelcome ? <div>
        <h2>Welcome to the world of Mathematics</h2>
        <hr />
        <p onMouseOver={()=>dispatch(incCount())}><b>Cross me to enter the villa of calculations.</b></p>
        <br />
        <p>Persons in room : {count}</p>
        <button onClick={()=>dispatch(genTable())}>Learn Tables</button>
        <button onClick={()=>dispatch(genCube())}>See the cube</button>
    </div>
    :
    showStatus.showCubes ? <Cubes/> : <Tables />
  )
}

export default Welcome