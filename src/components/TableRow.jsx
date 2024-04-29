import React, { useContext } from 'react'

import CommonStatesContext from '../contexts/CommonStatesContext'

import Button from './ui/Button'

function TableRow({ rowData, showDataProperties, setShowDeleteAffirmationModal, setdeleteData, setShowLecturersModal}) {
  
  const {setEditLecturersData} = useContext(CommonStatesContext)

  return (
    <tr className='border-b-2'>
      {showDataProperties.map(property => <td key={property} className='px-1 border-collapse'>{rowData[property]}</td>)}
      <td>
        <div className='flex justify-center'>
          <Button onClick={() => {setEditLecturersData(true); setdeleteData(
            {
              id: rowData.id,
              name: rowData.name
            }
          ); setShowLecturersModal(true)}}>Uredi</Button>
          <Button onClick={() => {setShowDeleteAffirmationModal(true); setdeleteData({
            id: rowData.id,
            name: rowData.name
          })}}>Izbriši</Button>
        </div>
      </td>
    </tr>
  )
}

export default TableRow