import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import AdminContext from '../contexts/AdminContext'

import logo from '../assets/logos/DDalm-Logo-AB.svg'
import ToggleButton from './ui/ToggleButton'

function Navbar() {
    const {isAdmin} = useContext(AdminContext)
    const location = useLocation()
    console.log(location)


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
                    <li className={`${location.pathname === "/" ? "before:w-full" : ""} mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]`}>
                        <Link to={"/"}>Naslovnica</Link>
                    </li>
                    <li className={`${location.pathname === "/workshops" ? "before:w-full" : ""} mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]`}>
                        <Link to={"/workshops"}>Radionice</Link>
                    </li>
                    <li className={`${location.pathname === "/lecturers" ? "before:w-full" : ""} mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s`}>
                        <Link to={"/lecturers"}>Predavači</Link>
                    </li>
                    <li className={`${location.pathname === "/administration" ? "before:w-full" : ""} mx-3 before:content-[''] before:w-0 before:h-[1px] relative before:absolute before:left-0 before:bottom-0 before:bg-white before:[transition:all_ease_0.3s] hover:before:w-full hover:before:[transition:all_ease_0.3s]`}>
                        {isAdmin && <Link to={"/administration"}>Administracija</Link>}
                    </li>
                </ul>
                <ToggleButton />
            </div>
        </nav>
    )
}

export default Navbar