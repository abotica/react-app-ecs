import React, { useContext } from 'react'

import Button from './ui/Button'

function TableRow({ rowData, showDataProperties, setShowDeleteAffirmationModal, setdeleteData}) {

  return (
    <tr className='border-b-2'>
      {showDataProperties.map(property => <td key={property} className='px-1 border-collapse'>{rowData[property]}</td>)}
      <td>
        <div className='flex justify-center'>
          <Button>Uredi</Button>
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