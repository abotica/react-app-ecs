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

function LecturersPage() {
  const [lecturers, setLecturers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [clickedLecturerId, setClickedLecturerId] = useState('')
  const [showEditLecturerModal, setShowEditLecturerModal] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const organizationsOptions = useRef([])


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


  return (
    <MainLayout>
    <NavigateLecturersContext.Provider value={{setClickedLecturerId: setClickedLecturerId, clickedLecturerId: clickedLecturerId}}>
      {
        clickedLecturerId ? <Outlet /> :
        
        <PageLayout filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={lecturers} setFilteredItems={setFilteredItems} >
          {isLoading ? <LoadingSpinner /> : filteredItems.map(lecturer =>
            <LecturerCard key={lecturer.id} lecturer={lecturer} setClickedLecturerId={setClickedLecturerId} showSeeWorkshopsButton={true}/>)
          }
        </PageLayout>
      }
      </NavigateLecturersContext.Provider>

    </MainLayout>
  )
}

export default LecturersPage