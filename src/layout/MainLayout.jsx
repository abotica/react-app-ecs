import React from 'react'
import Navbar from '../components/Navbar'
import CustomFooter from '../components/CustomFooter'


function MainLayout({children}) {
  
  return (
    <div className='h-screen flex flex-col'>
        <Navbar />
        {children}
        <CustomFooter />
    </div>
  )
}

export default MainLayout