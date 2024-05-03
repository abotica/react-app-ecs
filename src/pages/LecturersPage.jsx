import React, { useContext, useEffect, useRef, useState } from 'react'

import MainLayout from '../layout/MainLayout'
import PageLayout from '../layout/PageLayout'

import UrlContext from '../contexts/UrlContext'

import axios from 'axios'

import LoadingSpinner from '../components/ui/LoadingSpinner'
import LecturerCard from '../components/LecturerCard'
import LecturersModal from '../components/LecturersModal'

import { Outlet } from 'react-router-dom'
import NavigateLecturersContext from '../contexts/NavigateLecturersContext'
import ModalsContext from '../contexts/ModalsContext'

function LecturersPage() {
  const [lecturers, setLecturers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [clickedLecturerId, setClickedLecturerId] = useState('')
  const [showLecturerPage, setShowLecturerPage] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const organizationsOptions = useRef([])

  const {showLecturersModal, setShowLecturersModal} = useContext(ModalsContext)

  const filterOptions = [
    {
      id: 'topics',
      name: 'Teme',
      options: ['React', 'PHP', 'Express', 'Wordpress']
    },
    {
      id: 'organizations',
      name: 'Organizacije',
      options: organizationsOptions.current
    }
  ]

  const { lecturersURL, organizationsURL } = useContext(UrlContext)

  // fetch lecturers on page load
  useEffect(() => {
    axios.get(organizationsURL)
    .then(response => {
      organizationsOptions.current = response.data.map(organization => organization.name)
    })

    axios.get(lecturersURL)
      .then(response => {
        setLecturers(response.data)
        setFilteredItems(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  function handleDataRefresh() {
    axios.get(lecturersURL)
      .then(response => {
        setLecturers(response.data)
        setFilteredItems(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }


  return (
    <MainLayout>
    {showLecturersModal && <LecturersModal setShowLecturersModal={setShowLecturersModal} handleDataRefresh={handleDataRefresh} editDataId={clickedLecturerId}/>}
    <NavigateLecturersContext.Provider value={{setClickedLecturerId: setClickedLecturerId, clickedLecturerId: clickedLecturerId, setShowLecturerPage: setShowLecturerPage}}>
      {
        showLecturerPage ? <Outlet /> :
        
        <PageLayout filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={lecturers} setFilteredItems={setFilteredItems} setIsLoading={setIsLoading} setShowModal={setShowLecturersModal}>
          {isLoading ? <LoadingSpinner /> : filteredItems.map(lecturer =>
            <LecturerCard key={lecturer.id} lecturer={lecturer} setClickedLecturerId={setClickedLecturerId} showSeeWorkshopsButton={true} setShowLecturersModal={setShowLecturersModal} setShowLecturerPage={setShowLecturerPage}/>)
          }
        </PageLayout>
      }
      </NavigateLecturersContext.Provider>

    </MainLayout>
  )
}

export default LecturersPage