import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import AdminContext from '../contexts/AdminContext'

import MainLayout from '../layout/MainLayout'
import AdministrationLayout from '../layout/AdministrationLayout'


function AdministrationPage() {
    const { isAdmin } = useContext(AdminContext)
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/administration/workshopsAdmin')
    }, [])

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