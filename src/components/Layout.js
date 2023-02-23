import React from 'react'
import { Home } from '../pages'
import Navbar from './Navbar'

const Layout = () => {
  return (
  
    <div className="flex flex-1 flex-col bg-white h-screen">
      {/* Navigation bar */}
      <Navbar/>

      {/* render pages through routes from react-dom  etc or just import single component */}
      <Home/>
    </div>
  )
}

export default Layout