import React, { useEffect } from 'react'
import { useContext, useState } from 'react'

import axios from 'axios'

import UrlContext from '../contexts/UrlContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { v4 as uuidv4 } from 'uuid'

import ModalAffirmationScreen from './ModalAffirmationScreen'
import WorkshopsModalForm from './WorkshopsModalForm'


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
  function handleOnClick() {
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
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm z-50'>
      <div className='bg-white rounded-xl shadow p-4 transition-all relative [width:30%] h-fit'>
        <FontAwesomeIcon onClick={handleOnClick} icon={faXmark} size='2xl' className='absolute -top-3 -right-2 cursor-pointer text-edit-blue hover:scale-125 transition-transform' />

        {isSubmitting ? <ModalAffirmationScreen error={error} success={success} isLoading={isLoading}/> : <WorkshopsModalForm isLoading={isLoading} lecturers={lecturers} workshop={workshop} setWorkshop={setWorkshop} setIsSubmitting={setIsSubmitting} handlePost={handlePost}/>}

      </div>
    </div>
  )
}

export default WorkshopsModal