import {useContext} from 'react'
import Select from 'react-select'

import Table from '../../components/Table'
import WorkshopsModal from '../../components/WorkshopsModal'

import ModalsContext from '../../contexts/ModalsContext'

function WorkshopsAdminPage() {
  const { showWorkshopsModal, setShowWorkshopsModal } = useContext(ModalsContext)
    
  return (
    <div className='h-fit'>
        {showWorkshopsModal && <WorkshopsModal setShowWorkshopsModal={setShowWorkshopsModal} />}
        <Table />
    </div>
  )
}

export default WorkshopsAdminPage