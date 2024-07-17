import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About'
import Books from './Books'
import FED_Books from './FED_Books';
import BED_Books from './BED_Books'
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';

const MainRoute = () => {
  return (
    <>
    
        <Router>          
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/books' element={<Books />}>
                  <Route path='fed' element={<FED_Books/>} />
                  <Route path='bed' element={<BED_Books/>} />
                </Route>
                <Route path='/register' element={<Register/>}>Register</Route>
                <Route path='/login' element={<Login/>}>Login</Route>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </Router>
    
    </>

  )
}

export default MainRoute