import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'

import UrlContext from '../../contexts/UrlContext'
import ModalsContext from '../../contexts/ModalsContext'

import DeleteAffirmationModal from '../../components/DeleteAffirmationModal'
import Table from '../../components/Table'
import OrganizationsModal from '../../components/OrganizationsModal'

function OrganizationsAdminPage() {
  const {organizationsURL} = useContext(UrlContext)
  const {showOrganizationsModal, setShowOrganizationsModal} = useContext(ModalsContext)

  const [organizations, setOrganizations] = useState([])
  const [showDeleteAffirmationModal, setShowDeleteAffirmationModal] = useState(false)
  const [deleteData, setdeleteData] = useState({
    id: '',
    name: ''
  })

  const organizationsShowDataProperties = ['name']

  useEffect(() => {
    axios.get(organizationsURL)
    .then(response => {
      setOrganizations(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  })

  function handleDataRefresh() {
    axios.get(organizationsURL)
    .then(response => {
      setOrganizations(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  }

  function handleDelete() {
    axios.delete(organizationsURL + `/${deleteData.id}`)
      .then(response => {
        console.log(response)
        handleDataRefresh()
      })
  }

  return (
    <div className='h-fit'>
    {showOrganizationsModal && <OrganizationsModal setShowOrganizationsModal={setShowOrganizationsModal} handleDataRefresh={handleDataRefresh}/> }
    {showDeleteAffirmationModal && <DeleteAffirmationModal setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} handleDelete={handleDelete} dataName={deleteData.name}/>}
      <Table dataArray={organizations} showDataProperties={organizationsShowDataProperties} setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} setdeleteData={setdeleteData} />
    </div>
  )
}

export default OrganizationsAdminPage