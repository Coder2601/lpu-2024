import React from 'react'
import NavMenu from './NavMenu'
import LogContexts from '../contexts/LogContexts'

const Header = () => {
  return (
    <div>
      <LogContexts>
        <NavMenu />
      </LogContexts>
    </div>
  )
}

export default Header