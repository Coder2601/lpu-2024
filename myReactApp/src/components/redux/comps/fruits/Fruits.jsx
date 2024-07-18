import React, { useState } from 'react'
import { addfruits, deleteFruit } from '../../actions/fruitActions';
import { useDispatch, useSelector } from 'react-redux';

const Fruits = () => {
    const[fruit,setFruit] = useState("");
    const list = useSelector(state=>state.fruitList);
    const dispatch = useDispatch();

  return (
    <div>
        <input type="text" placeholder='Add fruit name' onChange={(e)=>setFruit(e.target.value)}/>
        
        <button onClick={()=>dispatch(addfruits(fruit))}>Add Fruit</button>

        <h2>List of fruits : </h2>
        <ul>
            {list.map((item,index)=><li key={index}>{item} <button onClick={()=>dispatch(deleteFruit(index))}>Remove</button></li>)}
        </ul>
    </div>
  )
}

export default Fruits