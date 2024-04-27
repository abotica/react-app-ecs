import {useEffect, useContext, useState} from 'react'

import Table from '../../components/Table'
import WorkshopsModal from '../../components/WorkshopsModal'

import axios from 'axios'

import ModalsContext from '../../contexts/ModalsContext'
import UrlContext from '../../contexts/UrlContext'
import DeleteAffirmationModal from '../../components/DeleteAffirmationModal'

function WorkshopsAdminPage() {
  const { showWorkshopsModal, setShowWorkshopsModal } = useContext(ModalsContext)
  const { workshopsURL } = useContext(UrlContext)
  
  const [workshops, setWorkshops] = useState([])
  const [showDeleteAffirmationModal, setShowDeleteAffirmationModal] = useState(false)
  const [deleteData, setdeleteData] = useState({
    id: '',
    name: ''
  })

  const workshopsShowDataProperties = ['name', 'date', 'enrolled']
  
  useEffect(() => {
    axios.get(workshopsURL)
    .then(response => {
      setWorkshops(response.data)
  })
    .catch(error => {
      console.error(error)
    })
    }, [])

  function handleDataRefresh() {
    axios.get(workshopsURL)
    .then(response => {
      setWorkshops(response.data)
  })
    .catch(error => {
      console.error(error)
    })
  }

  function handleDelete() {
    axios.delete(workshopsURL + `/${deleteData.id}`)
      .then(response => {
        console.log(response)
        handleDataRefresh()
      })
  }

  return (
    <div className='h-fit'>
        {showWorkshopsModal && <WorkshopsModal setShowWorkshopsModal={setShowWorkshopsModal} handleDataRefresh={handleDataRefresh}/>}
        {showDeleteAffirmationModal && <DeleteAffirmationModal setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} handleDelete={handleDelete} dataName={deleteData.name}/>}
        <Table dataArray={workshops} showDataProperties={workshopsShowDataProperties} setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} setdeleteData={setdeleteData}/>
    </div>
  )
}

export default WorkshopsAdminPage