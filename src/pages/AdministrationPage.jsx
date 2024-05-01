import React, { useContext, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import AdminContext from '../contexts/AdminContext'

import MainLayout from '../layout/MainLayout'
import AdministrationLayout from '../layout/AdministrationLayout'


function AdministrationPage() {
    const { isAdmin } = useContext(AdminContext)

    return isAdmin ? (
        <MainLayout>
            <AdministrationLayout>
                <Outlet />
            </AdministrationLayout>
        </MainLayout>
    )
        :
        <Navigate to='/' />
}

export default AdministrationPage