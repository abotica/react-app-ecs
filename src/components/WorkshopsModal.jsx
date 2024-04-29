import React from 'react'
import { useContext, useState, useEffect } from 'react'

import axios from 'axios'

import UrlContext from '../contexts/UrlContext'
import CommonStatesContext from '../contexts/CommonStatesContext'

import { v4 as uuidv4 } from 'uuid'

import ModalLayout from '../layout/ModalLayout'

import ModalAffirmationScreen from './ModalAffirmationScreen'
import WorkshopsModalForm from './WorkshopsModalForm'


function WorkshopsModal({ setShowWorkshopsModal, handleDataRefresh, editDataId }) {

  // getting the URL for fetching lecturers from the API
  const { lecturersURL, workshopsURL } = useContext(UrlContext)
  const {editData, setEditData} = useContext(CommonStatesContext)

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
        console.error(error)
      })
  }, [])


  function handlePost() {
    axios.post(workshopsURL, workshop)
      .then(() => {
        setIsLoading(false)
        setSuccess('Radionica je uspješno dodana!')
        handleDataRefresh()
      })
      .catch(error => {
        setIsLoading(false)
        setError('Nešto je pošlo po krivu')
        console.error(error)
      })
  }

  function handlePut(){
    axios.put(workshopsURL + `/${editDataId}`, workshop)
      .then(() => {
        setIsLoading(false)
        setSuccess('Radionica uspješno izmijenjena!')
        handleDataRefresh()
      })
      .catch(error => {
        setError('Nešto je pošlo po krivu')
        console.error(error)
      })
  }


  return (
    <ModalLayout handleCloseModal={handleCloseModal}>
      {isSubmitting ? <ModalAffirmationScreen error={error} success={success} isLoading={isLoading} /> : <WorkshopsModalForm isLoading={isLoading} lecturers={lecturers} workshop={workshop} setWorkshop={setWorkshop} setIsSubmitting={setIsSubmitting} handlePost={handlePost} editDataId={editDataId} editData={editData} handlePut={handlePut}/>}
    </ModalLayout>
  )
}

export default WorkshopsModal