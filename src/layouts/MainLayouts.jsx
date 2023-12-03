import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayouts = ({children}) => {
  return (
    <>
     <Navbar/>
      <div className="container mt-4">
      {children}
      </div>
     <Footer/>
     </>
    
    
  )
}

export default MainLayouts