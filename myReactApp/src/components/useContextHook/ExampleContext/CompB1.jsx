import React, {useContext, useState} from 'react'
import { storeContext } from './Store';

const CompB1 = () => {
    const {points} = useContext(storeContext);
    const [score,setScore] = useState(points);
  
    return (
    <div>
        <h2>CompB1</h2>
        <button onClick={()=>setScore(score+5)}>Increase by 5 : {score}</button>
    </div>
  )
}

export default CompB1