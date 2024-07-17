import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const nav = useNavigate();

  return (
    <div>
        <h2>Login</h2>
        <p>Click here to go to <b onClick={()=>nav('/')}>Home</b> page</p>
    </div>
  )
}

export default Login