import React, { useContext, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import AdminContext from '../contexts/AdminContext'
import CommonStatesContext from '../contexts/CommonStatesContext'

import MainLayout from '../layout/MainLayout'
import AdministrationLayout from '../layout/AdministrationLayout'


function AdministrationPage() {
    const { isAdmin } = useContext(AdminContext)
    const [editLecturersData, setEditLecturersData] = useState(false)
    

    return isAdmin ? (
        <MainLayout>
                <CommonStatesContext.Provider value={{editLecturersData: editLecturersData, setEditLecturersData: setEditLecturersData}}>
                    <AdministrationLayout>
                        <Outlet />
                    </AdministrationLayout>
                </CommonStatesContext.Provider>
        </MainLayout>
    )
        :
        <Navigate to='/' />
}

export default AdministrationPage