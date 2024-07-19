import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Header />
            {children}
            <br /><br /><hr />
        <Footer />
    </>
  )
}

export default Layout