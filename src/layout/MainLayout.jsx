import React from 'react'
import Navbar from '../components/Navbar'

function MainLayout({children}) {
  return (
    <div className='relative '>
        <Navbar />
        <div>{children}</div>
    </div>
  )
}

export default MainLayout