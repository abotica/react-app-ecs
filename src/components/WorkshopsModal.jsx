import React, { useEffect } from 'react'
import { useContext, useState } from 'react'

import axios from 'axios'

import UrlContext from '../contexts/UrlContext'

import { v4 as uuidv4 } from 'uuid'

import ModalAffirmationScreen from './ModalAffirmationScreen'
import WorkshopsModalForm from './WorkshopsModalForm'
import ModalLayout from '../layout/ModalLayout'


function WorkshopsModal({ setShowWorkshopsModal, handleDataRefresh }) {

  // getting the URL for fetching lecturers from the API
  const { lecturersURL, workshopsURL } = useContext(UrlContext)

  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lecturers, setLecturers] = useState([])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // state for workshop object used for creating a new workshop and sending it to the API
  const [workshop, setWorkshop] = useState(
    {
      id: uuidv4(),
      name: '',
      date: '',
      lecturers: [],
      description: '',
      topic: {},
      difficulty: '',
      enrolled: 0,
    }
  )

  // handle for closing the modal
  function handleCloseModal() {
    setShowWorkshopsModal(false)
  }

  useEffect(() => {
    axios.get(lecturersURL)
      .then(response => {
        setLecturers(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  function handlePost() {
    axios.post(workshopsURL, workshop)
      .then(() => {
        setIsLoading(false)
        setSuccess('Radionica je uspješno dodana!')
        handleDataRefresh()
      })
      .catch(() => {
        setIsLoading(false)
        setError('Nešto je pošlo po krivu')
      })
  }


  return (
    <ModalLayout handleCloseModal={handleCloseModal}>


      {isSubmitting ? <ModalAffirmationScreen error={error} success={success} isLoading={isLoading} /> : <WorkshopsModalForm isLoading={isLoading} lecturers={lecturers} workshop={workshop} setWorkshop={setWorkshop} setIsSubmitting={setIsSubmitting} handlePost={handlePost} />}


    </ModalLayout>
  )
}

export default WorkshopsModal