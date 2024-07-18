// import Button from './components/classBasedButton';
// import {Game, Heading} from './components/Headings';
import React, { useState } from 'react';
import './App.css'
// import Welcome from './components/redux/comps/Welcome';
// import Cubes from './components/redux/comps/Cubes';
// import Tables from './components/redux/comps/Tables';
import Fruits from './components/redux/comps/fruits/Fruits';
// import Bio from './components/Bio';
// import Eligible from './components/conditionalRendering/Eligible';
// import Main from './components/conditionalRendering/Main';
// import Lifecycle from './components/lifecycleMethods/Lifecycle';
// import ChangeCounter from './components/props/ChangeCounter';
// import TodoData from './components/TodoList/TodoData';
// import Pure from './components/lifecycleMethods/PureComponent';
// import MainBanner from './components/hoc/Banner';
// import MainPointer from './components/hoc/Pointer';
// import CompA from './components/useContextHook/ExampleContext/CompA';
// import SideEffect from './components/useEfffectHook/SideEffect';
// import Users from './components/useEfffectHook/Users';
// import StoreHouse from './components/useContextHook/Example1/StoreHouse';
// import Doubles from './components/useContextHook/Example1/Doubles';
// import Multiplex from './components/useContextHook/Example1/Multiplex';
// import CompC from './components/useContextHook/Example1/CompC';
// import Store from './components/useContextHook/ExampleContext/Store';
// import CompB from './components/useContextHook/ExampleContext/CompB';
// import CompB1 from './components/useContextHook/ExampleContext/CompB1';
// import CompA1 from './components/useContextHook/ExampleContext/CompA1';
// import CalculusStore from './components/useContextHook/TaskPractice/TaskStore';
// import WelcomeScreen from './components/useContextHook/TaskPractice/Welcome';
// import Cubes from './components/useContextHook/TaskPractice/Cubes';
// import Tables from './components/useContextHook/TaskPractice/Tables';
// import Play from './components/eventHandler';
// import Counter from './components/Counter';

function App() {
  // const [display, setDisplay] = useState(true);

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

        {/* {display ? <Lifecycle /> : <Replacement />}


        <button onClick={() => setDisplay(!display)}>{display ? "Hide" : "Show"}</button> */}

        {/* <Pure/> */}

        {/* <MainBanner />
          <MainPointer /> */}


          {/* <CompA /> */}
          {/* <SideEffect /> */}
          {/* <Users /> */}

          {/* <StoreHouse>
            <Doubles/>
            <hr />
            <Multiplex />
            <hr />
            <CompC />
          </StoreHouse> */}

          {/* <Store> */}
            {/* <CompA />
            <CompB1 /> */}
            {/* <CompA1/>
          </Store> */}

          {/* <CalculusStore>
            <WelcomeScreen />
            <Cubes/>
            <Tables/>
          </CalculusStore> */}


            {/* <Welcome /> */}
            {/* <Cubes />
            <Tables /> */}
          <Fruits />
      </div>
    </>
  )
}


// function Replacement() {
//   return (
//     <h2>Wake Up Kid!!</h2>
//   )
// }

export default App;