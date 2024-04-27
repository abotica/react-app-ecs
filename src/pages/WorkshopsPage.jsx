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

  const { workshopsURL } = useContext(UrlContext)

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

  return (
    <MainLayout>
    {showEnrollModal && <EnrollModal setShowEnrollModal={setShowEnrollModal} clickedWorkshopId={clickedWorkshopId}/>}
      <PageLayout>
        {isLoading ? <LoadingSpinner spin={isLoading} /> : workshops.map(workshop => {
          console.log(workshop)
          return <WorkshopCard key={workshop.id} workshop={workshop} setShowEnrollModal={setShowEnrollModal} setClickedWorkshopId={setClickedWorkshopId}/>
        })}
      </PageLayout>
    </MainLayout>
  )
}

export default WorkshopsPage