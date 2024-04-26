import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

import UrlContext from '../contexts/UrlContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { v4 as uuidv4 } from 'uuid'

import ModalAffirmationScreen from './ModalAffirmationScreen'
import WorkshopsModalForm from './WorkshopsModalForm'


function WorkshopsModal({ setShowWorkshopsModal }) {

  // getting the URL for fetching lecturers from the API
  const { lecturersURL, workshopsURL } = useContext(UrlContext)

  // fetching lecturers from the API
  const lecturers = useFetch(lecturersURL, "GET", {})

  const [isSubmitting, setIsSubmitting] = useState(false)

  // state for workshop object used for creating a new workshop and sending it to the API
  const [workshop, setWorkshop] = useState(
    {
      id: uuidv4(),
      name: '',
      date: '',
      lecturers: [],
      description: '',
      topic: {},
      difficulty: ''
    }
  )

  // handle for closing the modal
  function handleOnClick() {
    setShowWorkshopsModal(false)
  }



  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm z-50'>
      <div className='bg-white rounded-xl shadow p-4 transition-all relative [width:30%] h-fit'>
        <FontAwesomeIcon onClick={handleOnClick} icon={faXmark} size='2xl' className='absolute -top-3 -right-2 cursor-pointer text-edit-blue hover:scale-125 transition-transform' />

        {isSubmitting ? <ModalAffirmationScreen workshopsURL={workshopsURL} workshop={workshop} /> : <WorkshopsModalForm isLoading={lecturers.isLoading} lecturers={lecturers} workshop={workshop} setWorkshop={setWorkshop} setIsSubmitting={setIsSubmitting} />}

      </div>
    </div>
  )
}

export default WorkshopsModal