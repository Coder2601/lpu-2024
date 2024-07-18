import React from 'react';
import { clrScreen, genCube } from '../actions/calculusActions';
import { useDispatch, useSelector } from 'react-redux';

const Tables = () => {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.vals.count);
  let arr = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div>
        <h2>Tables Screen</h2>
        <hr />
        <p>Table of <b>{count}</b></p>
        <div>
            {arr.map((item,index)=>{
              return <p key={index}>{count} x {item} = {count*item}</p>
            })}
        </div>
        <button onClick={()=>dispatch(clrScreen())}>Clear Room</button>
        <button onClick={()=>dispatch(genCube())}>Go to Cubes</button>
    </div>
  )
}

export default Tables