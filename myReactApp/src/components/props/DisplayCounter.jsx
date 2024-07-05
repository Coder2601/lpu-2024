import React from 'react';
import Multiplier from './Multiplier';

const DisplayCounter = ({count, setCount}) => {
  return (
    <div>
        <h2>Display Counter Component</h2>
        <p>Count : {count}</p>

        <Multiplier count={count} setCount={setCount} />
    </div>
  )
}

export default DisplayCounter