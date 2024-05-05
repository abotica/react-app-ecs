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
        <div className='w-3/4 h-max flex rounded-xl bg-white shadow-md my-2 justify-start overflow-hidden items-stretch'>
            <div className='w-8/12 h-8/12 flex flex-col justify-between items-center py-5'>
                <p className='font-mina text-edit-blue font-bold text-3xl'>{lecturer.name}</p>
                <p className='font-mina font-bold my-2 text-edit-blue'>OPIS</p>
                <div className='font-thin text-balance w-10/12 h-fit text-center'>{lecturer.bio}</div>
                <p className='font-mina font-bold my-2 text-edit-blue'>ORGANIZACIJA</p>
                <p className='font-thin'>{lecturer.organization.name}</p>
                <p className='font-mina font-bold my-2 text-edit-blue'>TEME PREDAVANJA</p>
                <p className='font-thin'>{lecturer.topics.map(topic => topic.name).join(', ')}</p>
                <div className='flex mt-2'>
                    {showSeeWorkshopsButton && <Link to={lecturer.id}><Button onClick={() => { setClickedLecturerId(lecturer.id); setShowLecturerPage(true) }}>Pregledaj radionice</Button></Link>}
                    {isAdmin && <Button className='ml-1 before:bg-edit-yellow border-edit-yellow text-edit-yellow' onClick={() => { setShowLecturersModal(true); setClickedLecturerId(lecturer.id); setEditData(true) }}>Uredi</Button>}
                </div>
            </div>
            <div className='w-8/12'>
                <img className='w-full' src={lecturerPhoto} alt='lecturer photo' />
            </div>
        </div>
    )
}

export default LecturerCard