import React, { useState } from 'react'

const Eligible = () => {

    const[age, setAge] = useState();

    const handleInput=(e)=>{
        setAge(e.target.value);
    }

  return (
    <>
        <h2>Let's see if you're eligible for the test</h2>
        <input type="number" placeholder='Enter the age' onChange={handleInput} />

        {age>=18 ? <h2>You're Eligible</h2> : <h2>You're Under-Age</h2>}
    </>
  )
}

export default Eligible