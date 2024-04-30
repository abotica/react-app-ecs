import React, { useContext } from 'react'

import Button from './ui/Button'

import AdminContext from '../contexts/AdminContext'

import lecturerPhoto from '../assets/lecturers/Chelsey Dietrich.jpg'

function LecturerCard({ lecturer, setClickedLecturerId }) {
    const { isAdmin } = useContext(AdminContext)

    return (
        <div className='w-8/12 h-2/5 flex rounded-xl bg-white shadow-md p-6 my-2 items-center'>
            <div className='w-7/12 h-full flex flex-col items-start justify-between'>
                <p className='font-semibold text-3xl'>IME</p>
                <p className='font-semibold italic my-2'>{lecturer.name}</p>
                <p className='font-semibold italic my-2'>OPIS</p>
                <div className='font-thin text-balance w-10/12 h-fit text-start'>{lecturer.bio}</div>
                <p className='font-semibold italic my-2'>ORGANIZACIJA</p>
                <p className='font-thin'>{lecturer.organization.name}</p>
                <p className='font-semibold italic my-2'>TEME PREDAVANJA</p>
                <p className='font-thin'>{lecturer.topics.map(topic => topic.name).join(', ')}</p>
                <div className='flex'>
                    <Button onClick={() => setClickedLecturerId(lecturer.id)}>Pregledaj radionice</Button>
                    {isAdmin && <Button className='ml-1'>Uredi</Button>}
                </div>
            </div>
            <div className='h-full w-5/12'>
                <img className='rounded-xl' src={lecturerPhoto} alt='lecturer photo' />
            </div>

        </div>
    )
}

export default LecturerCard