import React, { useContext } from 'react'

import expressIcon from '../assets/logos/expressjs-icon.svg'
import phpIcon from '../assets/logos/php-icon.svg'
import reactIcon from '../assets/logos/reactjs-icon.svg'
import wordpressIcon from '../assets/logos/wordpress-icon.svg'

import Button from './ui/Button'

import AdminContext from '../contexts/AdminContext'
import CommonStatesContext from '../contexts/CommonStatesContext'

function WorkshopCard({ workshop, setShowEnrollModal, setClickedWorkshopId, showEnrollButton, setShowWorkshopsModal }) {
    const {isAdmin} = useContext(AdminContext)
    const {setEditData} = useContext(CommonStatesContext)

    function selectIcon() {
        switch (workshop.topic.name) {
            case 'React':
                return reactIcon
            case 'PHP':
                return phpIcon
            case 'Express':
                return expressIcon
            case 'Wordpress':
                return wordpressIcon
            default:
                return null
        }

    }

    return (
        <div  className='w-5/12 h-max flex flex-col rounded-xl bg-white shadow-md p-6 my-2'>
            <div className='h-fit w-full flex flex-col'>
                <p className='font-semibold text-3xl text-center w-full'>{workshop.topic.name}</p>
                <p className='font-semibold italic my-2'>OPIS</p>
                <div className='font-thin break-words w-full'>{workshop.description}</div>
                <p className='font-semibold italic my-2'>TEŽINA</p>
                <p className='font-thin'>{workshop.difficulty.name}</p>
                <p className='font-semibold italic my-2'>DATUM ODRŽAVANJA</p>
                <p className='font-thin'>{workshop.date}</p>
                <p className='font-semibold italic my-2'>PREDAVAČI</p>
                <p className='font-thin'>{workshop.lecturers.map(lecturer => lecturer.name).join(', ')}</p>
            </div>
            <div className='flex justify-center mt-2 h-fit'>
                {showEnrollButton && <Button onClick={() => {setShowEnrollModal(true); setClickedWorkshopId(workshop.id)}}>Prijavi se</Button>}
                {isAdmin && <Button className='ml-1' onClick={() => {setShowWorkshopsModal(true); setClickedWorkshopId(workshop.id); setEditData(true)}}>Uredi</Button>}
            </div>
        </div>
    )
}

export default WorkshopCard