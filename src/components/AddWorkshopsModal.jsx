import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

import ModalsContext from '../contexts/ModalsContext'
import UrlContext from '../contexts/UrlContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { v4 as uuidv4 } from 'uuid'
import Input from './ui/Input'
import Select from 'react-select'
import LoadingSpinner from './ui/LoadingSpinner'
import useCreateOptions from '../hooks/useCreateOptions'



function AddWorkshopsModal() {
  const { showWorkshopsModal, setShowWorkshopsModal } = useContext(ModalsContext)
  const {lecturersURL} = useContext(UrlContext)
  const lecturers = useFetch(lecturersURL , "GET", {})

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

  // const lecturersOptions = useCreateOptions(lecturers)
  const topicsOptions = [
    { value: "react", label: "React" },
    { value: "express", label: "Express" },
    { value: "next_js", label: "Next.js" },
  ]



  function handleOnClick() {
    setShowWorkshopsModal(!showWorkshopsModal)
  }

  function handleOnChange(e) {
    e.target.value
  }

  return showWorkshopsModal && (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm'>
      <div className='bg-white rounded-xl shadow p-6 transition-all relative [width:30%] [height:50%]'>
        <FontAwesomeIcon onClick={handleOnClick} icon={faXmark} size='2xl' className='absolute -top-3 -right-2 cursor-pointer text-edit-blue hover:scale-125 transition-transform' />
        {/* <small className='text-gray-400'><i>ID: {uuidv4()}</i></small> */}
        <h2 className='text-2xl font-bold text-center'>Dodaj radionicu</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <Input type='text' placeholder='Naziv radionice' />
          <Input type='date' placeholder='Datum održavanja' />
          <Select options={topicsOptions} placeholder='Tema radionice' />
          <Select isMulti placeholder='Predavači radionice' />
          <Input type='textarea' placeholder='Opis radionice' />
        </form>
      </div>
      <LoadingSpinner spin={lecturers.isLoading} />
    </div>
  )
}

export default AddWorkshopsModal