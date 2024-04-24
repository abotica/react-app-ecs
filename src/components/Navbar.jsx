import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import AdminContext from '../contexts/AdminContext'

import logo from '../assets/DDalm-Logo-AB.svg'
import ToggleButton from './ui/ToggleButton'

function Navbar() {
    const {isAdmin} = useContext(AdminContext)

    return (
        <nav className='bg-navbar-black sticky h-16 flex justify-between items-center'>
            <div className='flex items-center h-full'>
                <Link className='h-full flex items-center' to={"/"}>
                    <img className='h-full w-auto' src={logo} alt="logo" />
                    <span className='font-semibold flex flex-col h-full justify-center px-0.5'><span className='text-edit-blue text-4xl'>EDIT</span><span className='text-edit-yellow text-xl'>CodeSchool</span></span>
                </Link>
            </div>

            <div className='flex justify-end items-center'>
                <ul className='flex items-center text-white'>
                    <li>
                        <Link className='px-3' to={"/"}>Naslovnica</Link>
                    </li>
                    <li>
                        <Link className='px-3' to={"/workshops"}>Radionice</Link>
                    </li>
                    <li>
                        <Link className='px-3' to={"/lecturers"}>Predavači</Link>
                    </li>
                    <li>
                        {isAdmin && <Link className='px-3' to={"/administration"}>Administracija</Link>}
                    </li>
                </ul>
                <ToggleButton />
            </div>
        </nav>
    )
}

export default Navbar