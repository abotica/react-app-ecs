import React from "react"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"

import AdminContext from "./contexts/AdminContext"
import ModalsContext from './contexts/ModalsContext'

import HomePage from "./pages/HomePage"
import WorkshopsPage from "./pages/WorkshopsPage"
import LecturersPage from "./pages/LecturersPage"
import AdministrationPage from "./pages/AdministrationPage"
import WorkshopsAdminPage from "./pages/subpages/WorkshopsAdminPage"
import OrganizationsAdminPage from "./pages/subpages/OrganizationsAdminPage"
import LecturersAdminPage from "./pages/subpages/LecturersAdminPage"


function App() {
  const URL = "http://192.168.0.68:3000"
  const [isAdmin, setIsAdmin] = useState(false)

  const [showWorkshopsModal, setShowWorkshopsModal] = useState(false)

  return (
    <>
      <AdminContext.Provider value={{ isAdmin: isAdmin, setIsAdmin: setIsAdmin }}>
        <ModalsContext.Provider value={{ showWorkshopsModal: showWorkshopsModal, setShowWorkshopsModal: setShowWorkshopsModal }}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='workshops' element={<WorkshopsPage />} />
            <Route path='lecturers' element={<LecturersPage />} />
            <Route path='administration' element={<AdministrationPage />}>
              <Route path="workshopsAdmin" element={<WorkshopsAdminPage />} />
              <Route path='organizationsAdmin' element={<OrganizationsAdminPage />} />
              <Route path='lecturersAdmin' element={<LecturersAdminPage />} />
            </Route>
          </Routes>
        </ModalsContext.Provider>
      </AdminContext.Provider>
    </>
  )
}

export default App
