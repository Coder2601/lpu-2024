import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/posts/Home'
import UserLogin from './components/signups/UserLogin';
import AdminLogin from './components/signups/AdminLogin';
import ViewPosts from './components/posts/ViewPosts';
import EditPosts from './components/posts/EditPosts';
import CreatePost from './components/posts/CreatePost';
import Register from './components/signups/Register';
import LogContexts from './components/contexts/LogContexts';
import PostContext from './components/contexts/PostContext';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/login' element={<LogContexts><UserLogin/></LogContexts>} />
          <Route path='/admin/login' element={<LogContexts><AdminLogin /></LogContexts>} />
          <Route path='/user/register' element={<Register />} />
          {/* <Route path='/blogs' element={<Blogs/>} /> */}
          <Route path='/posts' element={<PostContext><ViewPosts /></PostContext>}>
            <Route path='editPost' element={<PostContext><EditPosts /></PostContext>} />
            <Route path='createPost' element={<PostContext><CreatePost /></PostContext>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App