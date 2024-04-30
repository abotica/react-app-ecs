import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from './ui/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import ModalsContext from '../contexts/ModalsContext'
import CommonStatesContext from '../contexts/CommonStatesContext'

function AdminNavbar() {
    const location = useLocation()
    const { showWorkshopsModal, setShowWorkshopsModal, showOrganizationsModal, setShowOrganizationsModal, showLecturersModal, setShowLecturersModal } = useContext(ModalsContext)
    const { setEditData } = useContext(CommonStatesContext)

    function handleOnClick() {
        switch (location.pathname) {
            case '/administration/workshopsAdmin':
                setShowWorkshopsModal(!showWorkshopsModal)
                break
            case '/administration/organizationsAdmin':
                setShowOrganizationsModal(!showOrganizationsModal)
                break
            case '/administration/lecturersAdmin':
                setShowLecturersModal(!showLecturersModal)
                break
        }
    }

    return (
        <nav className='mt-5 mb-10'>
            <div className='grid grid-rows-1 grid-cols-3'>
                <div className='row-start-1 row-end-2 col-start-2 col-end-3 self-center'>
                    <ul className='flex justify-around' >
                        <li className='px-3 font-semibold text-xl'>
                            <Link to={"workshopsAdmin"}>Radionice</Link>
                        </li>
                        <li className='px-3 font-semibold text-xl'>
                            <Link to={"organizationsAdmin"}>Organizacije</Link>
                        </li>
                        <li className='px-3 font-semibold text-xl'>
                            <Link to={"lecturersAdmin"}>Predavači</Link>
                        </li>
                    </ul>
                </div>
                {location.pathname !== '/administration' && <Button className='mr-2 row-start-1 row-end-2 col-start-3 col-end-4 w-6/12 justify-self-center self-center' onClick={() => { setEditData(false); handleOnClick() }}><FontAwesomeIcon icon={faPlus} />
                {location.pathname === '/administration/workshopsAdmin' && 'Dodaj radionicu'}
                {location.pathname === '/administration/organizationsAdmin' && 'Dodaj organizaciju'}
                {location.pathname === '/administration/lecturersAdmin' && 'Dodaj predavača'}
                </Button>}
            </div>
        </nav>
    )
}

export default AdminNavbar