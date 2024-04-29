import React, { useContext } from 'react'
import { Link, useLocation} from 'react-router-dom'

import Button from './ui/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import ModalsContext from '../contexts/ModalsContext'
import CommonStatesContext from '../contexts/CommonStatesContext'

function AdminNavbar() {
const location = useLocation()
const {showWorkshopsModal, setShowWorkshopsModal, showOrganizationsModal, setShowOrganizationsModal, showLecturersModal, setShowLecturersModal} = useContext(ModalsContext)
const {setEditData} = useContext(CommonStatesContext)

function handleOnClick(){
    switch(location.pathname){
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
    <nav className='flex justify-between items-center mt-5'>
        <div>
            <ul className='flex justify-around'>
                <li className='px-3'>
                    <Link to={"workshopsAdmin"}>Radionice</Link>
                </li>
                <li className='px-3'>
                    <Link to={"organizationsAdmin"}>Organizacije</Link>
                </li>
                <li className='px-3'>
                    <Link to={"lecturersAdmin"}>Predavači</Link>
                </li>
            </ul>
        </div>
        <Button onClick={() => {setEditData(false) ; handleOnClick()}}><FontAwesomeIcon icon={faPlus} />Dodaj</Button>
    </nav>
  )
}

export default AdminNavbar