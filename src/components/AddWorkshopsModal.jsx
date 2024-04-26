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
import Button from './ui/Button'
import ModalAffirmationScreen from './ModalAffirmationScreen'


function AddWorkshopsModal({ setShowWorkshopsModal }) {

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
    setWorkshop({
      ...workshop,
      [e.target.name]: e.target.value
    })
  }

  function handleOnChangeSelect(name, selectedOption) {
    setWorkshop({
      ...workshop,
      [name]: selectedOption
    })
  }

  useEffect(() => { }, [])

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm z-50'>
      <div className='bg-white rounded-xl shadow p-4 transition-all relative [width:30%] h-fit'>
        <FontAwesomeIcon onClick={handleOnClick} icon={faXmark} size='2xl' className='absolute -top-3 -right-2 cursor-pointer text-edit-blue hover:scale-125 transition-transform' />

        {lecturers.isLoading
          ?
          <LoadingSpinner spin={lecturers.isLoading} />
          :
          <form className='flex flex-col h-max w-full' onSubmit={e => {e.preventDefault(); }}>
            <h2 className='text-2xl font-bold text-center'>Dodaj radionicu</h2>
            <Input type='text' name='name' value={workshop.name} onChange={handleOnChange} placeholder='Naziv radionice' />
            <Input type='date' name='date' value={workshop.date} onChange={handleOnChange} placeholder='Datum održavanja' />
            <Select className='my-4' value={workshop.topic} onChange={selectedOption => handleOnChangeSelect('topic', selectedOption)} options={topicsOptions} placeholder='Tema radionice' required />
            <Select className='my-4' value={workshop.lecturers} onChange={selectedOption => handleOnChangeSelect('lecturers', selectedOption)} isMulti options={lecturerOptions} placeholder='Predavači radionice' required />
            <Input type='textarea' name='description' value={workshop.description} onChange={handleOnChange} placeholder='Opis radionice' />
            <Button>Dodaj</Button>
          </form> 
        } 
      </div>
    </div>
  )
}

export default AddWorkshopsModal