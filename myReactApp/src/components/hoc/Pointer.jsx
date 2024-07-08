import React from 'react'
import higherOrderComp from './HOC';

function PointerChild({handleCount, count}) {
  return (
    <div>
        <h2 onClick={handleCount}>Pointer clicked {count} times</h2>
    </div>
  )
}

const MainPointer = higherOrderComp(PointerChild);
export default MainPointer;