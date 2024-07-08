// import Button from './components/classBasedButton';
// import {Game, Heading} from './components/Headings';
import React, { useState } from 'react';
import './App.css'
import Bio from './components/Bio';
import Eligible from './components/conditionalRendering/Eligible';
import Main from './components/conditionalRendering/Main';
import Lifecycle from './components/lifecycleMethods/Lifecycle';
import ChangeCounter from './components/props/ChangeCounter';
import TodoData from './components/TodoList/TodoData';
import Pure from './components/lifecycleMethods/PureComponent';
// import Play from './components/eventHandler';
// import Counter from './components/Counter';

function App() {
  const[display,setDisplay] = useState(true);

  return (
    <>
      <div className='appContainer'>
        {/* <Game />
        <Heading />
        <Button /> */}
        {/* <Play/> */}
        
        {/* <Counter/> */}
        {/* <Bio /> */}
        {/* <Eligible /> */}
        {/* <Main/> */}
        {/* <ChangeCounter/> */}
        {/* <TodoData/> */}

        {/* {display?<Lifecycle/>:<Rooster/>}

        <button onClick={()=>setDisplay(!display)}>{display?"Hide":"Show"}</button> */}


        <Pure/>

      </div>
    </>
  )
}


function Rooster(){
  return(
    <h2>Wake Up Kid!!</h2>
  )
}

export default App;