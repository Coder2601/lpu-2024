import React, { useState } from 'react'

const higherOrderComp = (WrappedComp) => {
  return (function Wrapper (){
    const[count, setCount ] = useState(10);

    const handleCount = ()=>{
        setCount(count+1);
    }

    return (<WrappedComp handleCount = {handleCount} count={count} />)
  })
}

export default higherOrderComp;