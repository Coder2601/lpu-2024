// import Button from './components/classBasedButton';
// import {Game, Heading} from './components/Headings';
import './App.css'
import Bio from './components/Bio';
import Eligible from './components/conditionalRendering/Eligible';
import Main from './components/conditionalRendering/Main';
import ChangeCounter from './components/props/ChangeCounter';
// import Play from './components/eventHandler';
// import Counter from './components/Counter';

function App() {
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
        <ChangeCounter/>

      </div>
    </>
  )
}

export default App;