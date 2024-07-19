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
          <Route path='/posts' element={<ViewPosts />}>
            <Route path='editPost' element={<EditPosts />} />
            <Route path='createPost' element={<CreatePost />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App