import React, { useContext } from 'react'

import expressIcon from '../assets/logos/expressjs-icon.svg'
import phpIcon from '../assets/logos/php-icon.svg'
import reactIcon from '../assets/logos/reactjs-icon.svg'
import wordpressIcon from '../assets/logos/wordpress-icon.svg'

import Button from './ui/Button'

import AdminContext from '../contexts/AdminContext'

function WorkshopCard({ workshop, setShowEnrollModal, setClickedWorkshopId }) {
    const {isAdmin} = useContext(AdminContext)

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
        <div  className='w-5/12 h-5/12 flex flex-col rounded-xl bg-white shadow-md p-6 my-2'>
            <div className='h-fit flex flex-col items-center'>
                <p className='font-semibold text-3xl'>{workshop.topic.name}</p>
                <p className='font-semibold italic my-2'>OPIS</p>
                <div className='font-thin text-balance w-10/12 h-fit text-center'>{workshop.description}</div>
                <p className='font-semibold italic my-2'>TEŽINA</p>
                <p className='font-thin'>{workshop.difficulty.name}</p>
                <p className='font-semibold italic my-2'>DATUM ODRŽAVANJA</p>
                <p className='font-thin'>{workshop.date}</p>
                <p className='font-semibold italic my-2'>PREDAVAČI</p>
                <p className='font-thin'>{workshop.lecturers.map(lecturer => lecturer.name).join(', ')}</p>
            </div>
            <div className='flex justify-center mt-2'>
                <Button onClick={() => {setShowEnrollModal(true); setClickedWorkshopId(workshop.id)}}>Prijavi se</Button>
                {isAdmin && <Button>Uredi</Button>}
            </div>
        </div>
    )
}

export default WorkshopCard