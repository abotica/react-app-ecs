import React, { useContext } from 'react'

import Button from './ui/Button'

import AdminContext from '../contexts/AdminContext'

import lecturerPhoto from '../assets/lecturers/Chelsey Dietrich.jpg'
import { Link } from 'react-router-dom'
import CommonStatesContext from '../contexts/CommonStatesContext'

function LecturerCard({ lecturer, setClickedLecturerId, showSeeWorkshopsButton, setShowLecturersModal, setShowLecturerPage }) {
    const { isAdmin } = useContext(AdminContext)
    const { setEditData } = useContext(CommonStatesContext)

    return (
        <div className='w-5/12 h-max flex flex-col rounded-xl bg-white shadow-md my-2 items-center justify-start overflow-hidden'>
            <div className='w-full bg-[#42B1D2] flex justify-center items-center'>
                <img className='object-cover rounded-full w-6/12 p-5' src={lecturerPhoto} alt='lecturer photo' />
            </div>
            <div className='w-7/12 h-full flex flex-col items-start justify-between  p-6 '>
                <p className='font-mina font-bold text-3xl'>{lecturer.name}</p>
                <p className='font-mina font-bold my-2'>OPIS</p>
                <div className='font-thin text-balance w-10/12 h-fit text-start'>{lecturer.bio}</div>
                <p className='font-mina font-bold my-2'>ORGANIZACIJA</p>
                <p className='font-thin'>{lecturer.organization.name}</p>
                <p className='font-mina font-bold my-2'>TEME PREDAVANJA</p>
                <p className='font-thin'>{lecturer.topics.map(topic => topic.name).join(', ')}</p>
                <div className='flex'>
                    {showSeeWorkshopsButton && <Link to={lecturer.id}><Button onClick={() => { setClickedLecturerId(lecturer.id); setShowLecturerPage(true) }}>Pregledaj radionice</Button></Link>}
                    {isAdmin && <Button className='ml-1' onClick={() => { setShowLecturersModal(true); setClickedLecturerId(lecturer.id); setEditData(true) }}>Uredi</Button>}
                </div>
            </div>
        </div>
    )
}

export default LecturerCard