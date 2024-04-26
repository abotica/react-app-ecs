import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'
import useCreateOptions from '../hooks/useCreateOptions'

import UrlContext from '../contexts/UrlContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { v4 as uuidv4 } from 'uuid'
import Input from './ui/Input'
import Select from 'react-select'
import LoadingSpinner from './ui/LoadingSpinner'


function AddWorkshopsModal({ setShowWorkshopsModal }) {

  // getting the URL for fetching lecturers from the API
  const { lecturersURL } = useContext(UrlContext)

  // fetching lecturers from the API
  const lecturers = useFetch(lecturersURL, "GET", {})

  // state for workshop object used for creating a new workshop and sending it to the API
  const [workshop, setWorkshop] = useState(
    {
      id: uuidv4(),
      name: '',
      date: '',
      lecturers: [],
      description: '',
      topic: '',
      difficulty: ''
    }
  )

  // options for select inputs
  const lecturerOptions = useCreateOptions(lecturers.data)

  const topicsOptions = [
    { value: "react", label: "React" },
    { value: "express", label: "Express" },
    { value: "next_js", label: "Next.js" },
  ]

  // functions for handling events
  function handleOnClick() {
    setShowWorkshopsModal(false)
  }
  function handleOnChange(e) {
    e.target.value
  }

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm'>
      <div className='bg-white rounded-xl shadow p-6 transition-all relative [width:30%] [height:50%]'>
        <FontAwesomeIcon onClick={handleOnClick} icon={faXmark} size='2xl' className='absolute -top-3 -right-2 cursor-pointer text-edit-blue hover:scale-125 transition-transform' />
        {/* <small className='text-gray-400'><i>ID: {uuidv4()}</i></small> */}
        <h2 className='text-2xl font-bold text-center'>Dodaj radionicu</h2>

        {lecturers.isLoading
          ?
          <LoadingSpinner spin={lecturers.isLoading} />
          :
          <form onSubmit={(e) => e.preventDefault()}>
            <Input type='text' placeholder='Naziv radionice' />
            <Input type='date' placeholder='Datum održavanja' />
            <Select className='my-4' options={topicsOptions} placeholder='Tema radionice' />
            <Select className='my-4' isMulti options={lecturerOptions} placeholder='Predavači radionice' />
            <Input type='textarea' placeholder='Opis radionice' />
          </form>
        }
      </div>
    </div>
  )
}

export default AddWorkshopsModal