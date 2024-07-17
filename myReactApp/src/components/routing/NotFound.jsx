import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const nav = useNavigate();
  return (
    <div>
        <h1>Error 404!</h1>
        <h3>Page Not Found !</h3>
        <h2>Go to <button onClick={()=>nav('/')}>Home</button> page</h2>
    </div>
  )
}

export default NotFound