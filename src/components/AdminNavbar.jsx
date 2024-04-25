import React, { useContext } from 'react'
import { Link, useLocation} from 'react-router-dom'

import Button from './ui/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalsContext from '../contexts/ModalsContext'

function AdminNavbar() {
const location = useLocation()
const {showWorkshopsModal, setShowWorkshopsModal} = useContext(ModalsContext)

function handleOnClick(){
    switch(location.pathname){
        case '/administration/workshopsAdmin':
            setShowWorkshopsModal(!showWorkshopsModal)
            break
        case '/administration/organizationsAdmin':
            break
        case '/administration/lecturersAdmin':
            
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
        <Button onClick={handleOnClick}><FontAwesomeIcon icon={faPlus} />Dodaj</Button>
    </nav>
  )
}

export default AdminNavbar