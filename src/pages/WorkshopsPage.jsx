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
  const [filterValues, setFilterValues] = useState({});

  const filters = [{ id: 'topics', name: 'Teme', options: ['React', 'PHP', 'Express', 'Wordpress'] }, { id: 'difficulty', name: 'Težina', options: ['Junior', 'Mid', 'Senior'] }]

  const { workshopsURL } = useContext(UrlContext)

  // fetch workshops on page load
  useEffect(() => {
    axios.get(workshopsURL)
      .then(response => {
        setWorkshops(response.data)
        console.log(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  //trebaju radit neovisno jedan o drugome sa ILI ne I
  useEffect(() => {
    setIsLoading(true)
    axios.get(workshopsURL)
      .then(response => {
        setWorkshops(response.data.filter(workshop => {

          if (filterValues.topics) {
            if (!filterValues.topics[workshop.topic.name]) {
              return false
            }
          }
          if (filterValues.difficulty) {
            if (!filterValues.difficulty[workshop.difficulty.name]) {
              return false
            }
          }

          return true
        }))
        setIsLoading(false)
      })

  }, [filterValues])

  return (
    <MainLayout>
      {showEnrollModal && <EnrollModal setShowEnrollModal={setShowEnrollModal} clickedWorkshopId={clickedWorkshopId} />}
      <PageLayout filters={filters} filterValues={filterValues} setFilterValues={setFilterValues}>
        {isLoading ? <LoadingSpinner spin={isLoading} /> : workshops.map(workshop =>
          <WorkshopCard key={workshop.id} workshop={workshop} setShowEnrollModal={setShowEnrollModal} setClickedWorkshopId={setClickedWorkshopId} />
        )}
      </PageLayout>
    </MainLayout>
  )
}

export default WorkshopsPage