import Button from './components/Button';
import {Game, Heading} from './components/Headings';
import './App.css'

function App() {
  return (
    <>
      <div className='appContainer'>
        <Game />
        <Heading />
        <Button />
      </div>
    </>
  )
}

export default App;