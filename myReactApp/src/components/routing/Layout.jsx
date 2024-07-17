import React from 'react'
import NavigationMenu from './NavigationMenu'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <NavigationMenu />

        {children}

        <Footer />
    </div>
  )
}

export default Layout