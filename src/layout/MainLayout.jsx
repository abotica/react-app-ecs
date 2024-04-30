import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MainLayout({children}) {
  
  return (
    <div className='h-screen flex flex-col'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout