import React, { useContext, useEffect, useState } from 'react'

import MainLayout from '../layout/MainLayout'
import PageLayout from '../layout/PageLayout'

import axios from 'axios'

import UrlContext from '../contexts/UrlContext'

import WorkshopCard from '../components/WorkshopCard'
import EnrollModal from '../components/EnrollModal'
import ModalsContext from '../contexts/ModalsContext'
import WorkshopsModal from '../components/WorkshopsModal'

function WorkshopsPage() {
  const [workshops, setWorkshops] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showEnrollModal, setShowEnrollModal] = useState(false)
  const [clickedWorkshopId, setClickedWorkshopId] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  const { showWorkshopsModal, setShowWorkshopsModal } = useContext(ModalsContext)

  const filterOptions = [
    {
      id: 'topics',
      name: 'Teme',
      options: ['React', 'PHP', 'Express', 'Wordpress']
    },
    {
      id: 'difficulty',
      name: 'Težina',
      options: ['Junior', 'Mid', 'Senior']
    }
  ]

  const { workshopsURL } = useContext(UrlContext)

  // fetch workshops on page load and initialize filteredItems
  useEffect(() => {
    axios.get(workshopsURL)
      .then(response => {
        setWorkshops(response.data)
        setFilteredItems(response.data)
      })
      .then(() => setIsLoading(false))
      .catch(error => {
        console.error(error)
      })
  }, [])

  function handleDataRefresh() {
    axios.get(workshopsURL)
      .then(response => {
        setWorkshops(response.data)
        setFilteredItems(response.data)
      })
      .then(() => setIsLoading(false))
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <MainLayout>
      {showEnrollModal && <EnrollModal setShowEnrollModal={setShowEnrollModal} clickedWorkshopId={clickedWorkshopId} />}
      {showWorkshopsModal && <WorkshopsModal setShowWorkshopsModal={setShowWorkshopsModal} handleDataRefresh={handleDataRefresh} editDataId={clickedWorkshopId} />}
      <PageLayout filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={workshops} setFilteredItems={setFilteredItems} setIsLoading={setIsLoading} isLoading={isLoading}>
        {
          filteredItems.map(workshop =>
          <WorkshopCard key={workshop.id} workshop={workshop} setShowEnrollModal={setShowEnrollModal} setClickedWorkshopId={setClickedWorkshopId} showEnrollButton={true} setShowWorkshopsModal={setShowWorkshopsModal} />
        )}
      </PageLayout>
    </MainLayout>
  )
}

export default WorkshopsPage