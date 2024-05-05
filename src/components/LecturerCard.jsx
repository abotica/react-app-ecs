import React, { useContext } from 'react'

import Button from './ui/Button'

import AdminContext from '../contexts/AdminContext'

import lecturer1 from '../assets/lecturers/Chelsey Dietrich.jpg'
import lecturer2 from '../assets/lecturers/Clementina DuBuque.jpg'
import lecturer3 from '../assets/lecturers/Ervin Howell.jpg'
import lecturer4 from '../assets/lecturers/Glenna Reichert.jpg'
import lecturer5 from '../assets/lecturers/Kurtis Weissnat.jpg'
import lecturer6 from '../assets/lecturers/Leanne Graham.jpg'
import lecturer7 from '../assets/lecturers/Patricia Lebsack.jpg'
import lecturer8 from '../assets/lecturers/Mrs.Dennis Schulist.jpg'
import lecturer9 from '../assets/lecturers/Nicholas Runolfsdottir V.jpg'
import lecturer10 from '../assets/lecturers/Clementine Bauch.jpg'

import { Link } from 'react-router-dom'
import CommonStatesContext from '../contexts/CommonStatesContext'

function LecturerCard({ lecturer, setClickedLecturerId, showSeeWorkshopsButton, setShowLecturersModal, setShowLecturerPage }) {
    const { isAdmin } = useContext(AdminContext)
    const { setEditData } = useContext(CommonStatesContext)

    const malePhotos = [lecturer3, lecturer5, lecturer9]
    const femalePhotos = [lecturer1, lecturer2, lecturer4, lecturer6, lecturer7, lecturer8, lecturer10]

    function getRandomPhoto(photos) {
        return photos[Math.floor(Math.random() * photos.length)];
      }

      const lecturerPhoto = lecturer.gender === 'male' ? getRandomPhoto(malePhotos) : getRandomPhoto(femalePhotos);

    return (
        <div className='w-3/4 h-max flex rounded-xl bg-white shadow-md my-2 justify-start overflow-hidden items-center'>
            <div className='w-8/12 h-full flex flex-col justify-between items-center py-5'>
                <div className='flex flex-col items-center'>
                    <p className='font-mina text-edit-blue font-bold text-3xl'>{lecturer.name}</p>
                    <p className='font-mina font-bold my-2 text-edit-blue'>OPIS</p>
                    <div className='font-thin text-balance w-10/12 h-fit text-center'>{lecturer.bio}</div>
                    <p className='font-mina font-bold my-2 text-edit-blue'>ORGANIZACIJA</p>
                    <p className='font-thin'>{lecturer.organization.name}</p>
                    <p className='font-mina font-bold my-2 text-edit-blue'>TEME PREDAVANJA</p>
                    <p className='font-thin'>{lecturer.topics.map(topic => topic.name).join(', ')}</p>
                </div>
                <div className='flex mt-2'>
                    {showSeeWorkshopsButton && <Link to={lecturer.id}><Button onClick={() => { setClickedLecturerId(lecturer.id); setShowLecturerPage(true) }}>Pregledaj radionice</Button></Link>}
                    {showSeeWorkshopsButton && isAdmin && <Button className='ml-1 before:bg-edit-yellow border-edit-yellow text-edit-yellow' onClick={() => { setShowLecturersModal(true); setClickedLecturerId(lecturer.id); setEditData(true) }}>Uredi</Button>}
                </div>
            </div>
            <div className='w-6/12 flex flex-col items-center justify-center'>
                <img className='rounded-full p-5' src={lecturerPhoto} alt='lecturer' />
            </div>
           
        </div>
    )
}

export default LecturerCard