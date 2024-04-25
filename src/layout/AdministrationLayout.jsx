import React from 'react'
import AdminNavbar from '../components/AdminNavbar'

function AdministrationLayout({children}) {
  return (
    <div>
        <AdminNavbar />
        {children}
    </div>
  )
}

export default AdministrationLayout