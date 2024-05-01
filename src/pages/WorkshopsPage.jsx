import React, { useContext, useEffect, useState } from 'react'

import MainLayout from '../layout/MainLayout'
import PageLayout from '../layout/PageLayout'

import axios from 'axios'

import UrlContext from '../contexts/UrlContext'

import WorkshopCard from '../components/WorkshopCard'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import EnrollModal from '../components/EnrollModal'

function WorkshopsPage() {
  const [workshops, setWorkshops] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showEnrollModal, setShowEnrollModal] = useState(false)
  const [clickedWorkshopId, setClickedWorkshopId] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

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
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <MainLayout>
      {showEnrollModal && <EnrollModal setShowEnrollModal={setShowEnrollModal} clickedWorkshopId={clickedWorkshopId} />}
      <PageLayout filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={workshops} setFilteredItems={setFilteredItems}>
        {isLoading ? <LoadingSpinner spin={isLoading} /> : filteredItems.map(workshop =>
          <WorkshopCard key={workshop.id} workshop={workshop} setShowEnrollModal={setShowEnrollModal} setClickedWorkshopId={setClickedWorkshopId} showEnrollButton={true} />
        )}
      </PageLayout>
    </MainLayout>
  )
}

export default WorkshopsPage