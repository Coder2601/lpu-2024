import React, { useContext, useEffect, useState } from 'react'
import { calculusContext } from './TaskStore';

const Tables = () => {

    let arr = [1,2,3,4,5,6,7,8,9,10];

    const {count, showTables, setShowTables, setShowWelcome, setCount} = useContext(calculusContext);

    const[tableNum, settableNum] = useState(count)

    useEffect(()=>{
      settableNum(count)
    },[count])

    const handleTableInput=(e)=>{
      settableNum(e.target.value)
    }

    const handleClear=()=>{
      setCount(0);
      setShowTables(false);
      setShowWelcome(true)
    }

  return (
    showTables ?
    <div>
        <h2>Tables</h2>
        <br /><hr /><br />
        <label>Enter value for a table </label>
        <input type="text" name="tableVal" id="tableOf" onChange={handleTableInput} />
        <br /><br />
        <hr /><br />
        <h3>Table of {tableNum}</h3>
        {arr.map(item=>{
            return(
                <p>{tableNum} x {item} = {tableNum*item}</p>
            )
        })}


        <br /><br />
        <button onClick={handleClear}>Clear the room</button>
        <br />
        <button onClick={()=>{setShowWelcome(true);setShowTables(false)}}>Back to Welcome Screen</button>

    </div>:
null  )
}

export default Tables