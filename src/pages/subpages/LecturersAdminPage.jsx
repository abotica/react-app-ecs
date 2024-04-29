import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'

import UrlContext from '../../contexts/UrlContext'
import ModalsContext from '../../contexts/ModalsContext'

import DeleteAffirmationModal from '../../components/DeleteAffirmationModal'
import Table from '../../components/Table'
import LecturersModal from '../../components/LecturersModal'


function LecturersAdminPage() {
  const {lecturersURL} = useContext(UrlContext)
  const {showLecturersModal, setShowLecturersModal} = useContext(ModalsContext)
  

  const [lecturers, setLecturers] = useState([])
  const [showDeleteAffirmationModal, setShowDeleteAffirmationModal] = useState(false)
  const [deleteData, setdeleteData] = useState({
    id: '',
    name: ''
  })

  const lecturersShowDataProperties = ['name']

  useEffect(() => {
    axios.get(lecturersURL)
      .then(response => {
        setLecturers(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  function handleDataRefresh() {
    axios.get(lecturersURL)
      .then(response => {
        setLecturers(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  function handleDelete() {
    axios.delete(lecturersURL + `/${deleteData.id}`)
      .then(response => {
        console.log(response)
        handleDataRefresh()
      })
  }
  
  return (
    <div className='h-fit'>
    {showLecturersModal && <LecturersModal setShowLecturersModal={setShowLecturersModal} handleDataRefresh={handleDataRefresh} editDataId={deleteData.id}/>}
    {showDeleteAffirmationModal && <DeleteAffirmationModal setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} handleDelete={handleDelete} dataName={deleteData.name}/>}
    <Table dataArray={lecturers} showDataProperties={lecturersShowDataProperties} setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} setdeleteData={setdeleteData} setShowLecturersModal={setShowLecturersModal}/>
    </div>
  )
}

export default LecturersAdminPage