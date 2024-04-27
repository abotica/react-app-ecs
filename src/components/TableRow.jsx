import React, { useContext } from 'react'

import Button from './ui/Button'
import axios from 'axios'

import UrlContext from '../contexts/UrlContext'

function TableRow({ rowData, showDataProperties, handleDataRefresh, setShowDeleteAffirmationModal }) {
  const { workshopsURL } = useContext(UrlContext)

  function handleDelete() {
    axios.delete(workshopsURL + `/${rowData.id}`)
      .then(response => {
        console.log(response)
        handleDataRefresh()
      })
  }

  return (
    <tr className='border-b-2'>
      {showDataProperties.map(property => <td key={property} className='px-1 border-collapse'>{rowData[property]}</td>)}
      <td>
        <div className='flex justify-center'>
          <Button>Uredi</Button>
          <Button onClick={() => setShowDeleteAffirmationModal(true)}>Izbriši</Button>
        </div>
      </td>
    </tr>
  )
}

export default TableRow