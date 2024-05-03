import React, { useContext, useEffect, useRef, useState } from 'react'

import expressIcon from '../assets/logos/expressjs-icon.svg'
import phpIcon from '../assets/logos/php-icon.svg'
import reactIcon from '../assets/logos/reactjs-icon.svg'
import wordpressIcon from '../assets/logos/wordpress-icon.svg'

import wordpressRectangle from '../assets/logos/wordpress.png'
import expressRectangle from '../assets/logos/express.png'
import reactRectangle from '../assets/logos/react.png'
import phpRectangle from '../assets/logos/php.png'

import Button from './ui/Button'

import AdminContext from '../contexts/AdminContext'
import CommonStatesContext from '../contexts/CommonStatesContext'

function WorkshopCard({ workshop, setShowEnrollModal, setClickedWorkshopId, showEnrollButton, setShowWorkshopsModal }) {
    const {isAdmin} = useContext(AdminContext)
    const {setEditData} = useContext(CommonStatesContext)
    const [textColor, setTextColor] = useState('edit-blue')
    const [icon, setIcon] = useState('')
    const className = useRef('')

    function selectIcon() {
        switch (workshop.topic.name) {
            case 'React':
                className.current = 'mb-3 text-[#40CBFE] border-[#40CBFE] before:bg-[#40CBFE]'
                return {icon: reactRectangle, color: '#40CBFE'}
            case 'PHP':
                className.current = 'mb-3 text-[#3E4780] border-[#3E4780] before:bg-[#3E4780]'
                return {icon: phpRectangle, color: '#3E4780'}
            case 'Express':
                className.current = 'mb-3 text-[#1A1A1A] border-[#1A1A1A] before:bg-[#1A1A1A]'
                return {icon: expressRectangle, color: '#1A1A1A'}
            case 'Wordpress':
                className.current = 'mb-3 text-[#0C6087] border-[#0C6087] before:bg-[#0C6087]'
                return {icon: wordpressRectangle, color: '#0C6087'}
            default:
                return null
        }
    }

    useEffect(() => {
        const {icon, color} = selectIcon()
        console.log(icon, color)
        setTextColor(color)
        setIcon(icon)
    }, [])
    return (
        <div  className='w-5/12 h-max flex flex-col rounded-xl bg-white shadow-md overflow-hidden my-5'>
        <div className='w-full'><img className='object-cover' src={icon} /></div>
            <div className='h-fit w-full flex flex-col p-6 my-2'>
                <p style={{color: textColor}} className='font-bold font-mina text-3xl text-center w-full'>{workshop.name}</p>
                <p style={{color: textColor}} className='font-mina font-bold my-2'>TEMA</p>
                <p className='font-thin'>{workshop.topic.name}</p>
                <p style={{color: textColor}} className='font-mina font-bold my-2'>OPIS</p>
                <div className='font-thin break-words w-full'>{workshop.description}</div>
                <p style={{color: textColor}} className='font-mina font-bold my-2'>TEŽINA</p>
                <p className='font-thin'>{workshop.difficulty.name}</p>
                <p style={{color: textColor}} className='font-mina font-bold my-2'>DATUM ODRŽAVANJA</p>
                <p className='font-thin'>{workshop.date}</p>
                <p style={{color: textColor}} className='font-mina font-bold my-2'>PREDAVAČI</p>
                <p className='font-thin'>{workshop.lecturers.map(lecturer => lecturer.name).join(', ')}</p>
            </div>
            <div className='flex justify-center mt-2 h-fit'>
                {showEnrollButton && <Button  className={className.current} onClick={() => {setShowEnrollModal(true); setClickedWorkshopId(workshop.id)}}>Prijavi se</Button>}
                {isAdmin && <Button className='ml-1 mb-3 text-edit-yellow border-edit-yellow before:bg-edit-yellow' onClick={() => {setShowWorkshopsModal(true); setClickedWorkshopId(workshop.id); setEditData(true)}}>Uredi</Button>}
            </div>
        </div>
    )
}

export default WorkshopCard