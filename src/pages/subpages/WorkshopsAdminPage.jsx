import React from 'react'

import Table from '../../components/Table'
import AddWorkshopsModal from '../../components/AddWorkshopsModal'

function WorkshopsAdminPage() {
    
  return (
    <div className='h-fit'>
        <AddWorkshopsModal />
        <Table />
    </div>
  )
}

export default WorkshopsAdminPage