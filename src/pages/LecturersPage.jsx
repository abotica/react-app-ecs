import React, { useContext, useEffect, useState } from 'react'

import MainLayout from '../layout/MainLayout'
import PageLayout from '../layout/PageLayout'

import UrlContext from '../contexts/UrlContext'

import axios from 'axios'

import LoadingSpinner from '../components/ui/LoadingSpinner'
import LecturerCard from '../components/LecturerCard'
import LecturersModal from '../components/LecturersModal'

import { Outlet } from 'react-router-dom'
import NavigateLecturersContext from '../contexts/NavigateLecturersContext'

function LecturersPage() {
  const [lecturers, setLecturers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [clickedLecturerId, setClickedLecturerId] = useState('')
  const [showEditLecturerModal, setShowEditLecturerModal] = useState(false)
  const [filterValues, setFilterValues] = useState({});


  const filters = [
    {
      id: 'topics',
      name: 'Teme',
      options: ['React', 'PHP', 'Express', 'Wordpress']
    },
    {
      id: 'organizations',
      name: 'Organizacije',
      options: ['Digitalna Dalmacija', 'Locastic', 'Lorem ipsum']
    }
  ]

  const { lecturersURL } = useContext(UrlContext)

  // fetch lecturers on page load
  useEffect(() => {
    axios.get(lecturersURL)
      .then(response => {
        setLecturers(response.data)
        console.log(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])


  return (
    <MainLayout>
    <NavigateLecturersContext.Provider value={{setClickedLecturerId: setClickedLecturerId, clickedLecturerId: clickedLecturerId}}>
      {
        clickedLecturerId ? <Outlet /> :
        
        <PageLayout filters={filters} filterValues={filterValues} setFilterValues={setFilterValues}>
          {isLoading ? <LoadingSpinner /> : lecturers.map(lecturer =>
            <LecturerCard key={lecturer.id} lecturer={lecturer} setClickedLecturerId={setClickedLecturerId} showSeeWorkshopsButton={true}/>)
          }
        </PageLayout>
      }
      </NavigateLecturersContext.Provider>

    </MainLayout>
  )
}

export default LecturersPage