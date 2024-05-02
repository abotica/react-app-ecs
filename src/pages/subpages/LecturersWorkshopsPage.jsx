import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import Button from '../../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import NavigateLecturersContext from '../../contexts/NavigateLecturersContext'
import axios from 'axios'
import UrlContext from '../../contexts/UrlContext'
import WorkshopCard from '../../components/WorkshopCard'
import LecturerCard from '../../components/LecturerCard'

function LecturersWorkshopsPage() {
  const navigate = useNavigate()
  const [lecturersWorkshops, setLecturersWorkshops] = useState([])
  const [lecturer, setLecturer] = useState({})
  const { setClickedLecturerId, clickedLecturerId, setShowLecturerPage } = useContext(NavigateLecturersContext)
  const { workshopsURL, lecturersURL } = useContext(UrlContext)
  const [isLoadingLecturers, setIsLoadingLecturers] = useState(true)
  const [isLoadingWorkshops, setIsLoadingWorkshops] = useState(true)

  useEffect(() => {
    axios.get(workshopsURL)
    .then(response => {
      const filteredWorkshops = response.data.filter(workshop => workshop.lecturers.find(lecturer => lecturer.id === clickedLecturerId))
      setLecturersWorkshops(filteredWorkshops)
      setIsLoadingWorkshops(false)
    })
    .catch(error => {
      console.error(error)
    })

    axios.get(`${lecturersURL}/${clickedLecturerId}`)
    .then(response => {
      setLecturer(response.data)
      setIsLoadingLecturers(false)
    })
    .catch(error => {
      console.error(error)
    })

  }, [])

  return (
    <div className='flex flex-col h-full justify-center items-center relative'>
      <div className='flex w-full mt-2 h-max absolute top-0 left-0'><Button onClick={() => { navigate(-1); setClickedLecturerId(''); setShowLecturerPage(false) }} className='ml-2'>Natrag na sve predavače</Button></div>

      { !isLoadingLecturers && <LecturerCard lecturer={lecturer} setClickedLecturerId={clickedLecturerId} showSeeWorkshopsButton={false} />}
      <div className='flex flex-wrap justify-evenly items-center w-full h-max'>
        {!isLoadingWorkshops && lecturersWorkshops.map(workshop =>
            <WorkshopCard key={workshop.id} workshop={workshop} setShowEnrollModal={false} setClickedWorkshopId={''} showEnrollButton={false}/>)}
      </div>
    </div>

  )
}

export default LecturersWorkshopsPage