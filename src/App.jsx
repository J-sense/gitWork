import React from 'react'
import Navbar from './components/Pages/Home/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Pages/Home/Footer'

const App = () => {
  return (
    <div >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
