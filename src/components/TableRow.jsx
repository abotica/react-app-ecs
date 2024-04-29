import React, { useContext } from 'react'

import CommonStatesContext from '../contexts/CommonStatesContext'

import Button from './ui/Button'

function TableRow({ rowData, showDataProperties, setShowDeleteAffirmationModal, setDeleteData, setShowModal}) {
  
  const {setEditData} = useContext(CommonStatesContext)

  return (
    <tr className='border-b-2'>
      {showDataProperties.map(property => <td key={property} className='px-1 border-collapse'>{rowData[property]}</td>)}
      <td>
        <div className='flex justify-center'>
          <Button onClick={() => {setEditData(true); setDeleteData(
            {
              id: rowData.id,
              name: rowData.name
            }
          ); setShowModal(true)}}>Uredi</Button>
          <Button onClick={() => {setShowDeleteAffirmationModal(true); setDeleteData({
            id: rowData.id,
            name: rowData.name
          })}}>Izbriši</Button>
        </div>
      </td>
    </tr>
  )
}

export default TableRow