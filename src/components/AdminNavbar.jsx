import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from './ui/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import ModalsContext from '../contexts/ModalsContext'
import CommonStatesContext from '../contexts/CommonStatesContext'

function AdminNavbar() {
    const location = useLocation()
    const [selectedItem, setSelectedItem] = useState('workshopsAdmin');
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
                        <li className={`font-bold text-white font-mina text-xl bg-title-background [background-repeat:no-repeat] [background-size:cover] px-[10px] py-[10px] ${selectedItem === 'workshopsAdmin' ? 'scale-125' : ''} transition-transform ease-in-out`}>
                            <Link onClick={() => setSelectedItem('workshopsAdmin')} to={"workshopsAdmin"}>Radionice</Link>
                        </li>
                        <li className={`font-bold text-white font-mina text-xl bg-title-background [background-repeat:no-repeat] [background-size:cover] px-[10px] py-[10px] ${selectedItem === 'organizationsAdmin' ? 'scale-125' : ''} transition-transform ease-in-out`}>
                            <Link onClick={() => setSelectedItem('organizationsAdmin')} to={"organizationsAdmin"}>Organizacije</Link>
                        </li>
                        <li className={`font-bold text-white font-mina text-xl bg-title-background [background-repeat:no-repeat] [background-size:cover] px-[10px] py-[10px] ${selectedItem === 'lecturersAdmin' ? 'scale-125' : ''} transition-transform ease-in-out`}>
                            <Link onClick={() => setSelectedItem('lecturersAdmin')} to={"lecturersAdmin"}>Predavači</Link>
                        </li>
                    </ul>
                </div>
                {location.pathname !== '/administration' && <Button className='mr-2 row-start-1 row-end-2 col-start-3 col-end-4 w-max px-2 justify-self-center self-center before:bg-edit-yellow border-edit-yellow text-edit-yellow' onClick={() => { setEditData(false); handleOnClick() }}><FontAwesomeIcon icon={faPlus} />
                    {location.pathname === '/administration/workshopsAdmin' && 'Dodaj radionicu'}
                    {location.pathname === '/administration/organizationsAdmin' && 'Dodaj organizaciju'}
                    {location.pathname === '/administration/lecturersAdmin' && 'Dodaj predavača'}
                </Button>}
            </div>
        </nav>
    )
}

export default AdminNavbar