import React from "react"
import { Routes, Route } from "react-router-dom"
import {useState} from "react"

import AdminContext from "./contexts/AdminContext"

import HomePage from "./pages/HomePage"
import WorkshopsPage from "./pages/WorkshopsPage"
import LecturersPage from "./pages/LecturersPage"
import AdministrationPage from "./pages/AdministrationPage"


function App() {
  const URL = "http://192.168.0.68:3000"
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <>
      <AdminContext.Provider value={{isAdmin:isAdmin, setIsAdmin:setIsAdmin}}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/workshops' element={<WorkshopsPage />}></Route>
          <Route path='/lecturers' element={<LecturersPage />}></Route>
          <Route path='/administration' element={<AdministrationPage />}></Route>
        </Routes>
      </AdminContext.Provider>
    </>
  )
}

export default App
