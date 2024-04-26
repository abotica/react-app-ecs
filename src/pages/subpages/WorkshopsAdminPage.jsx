import {useContext} from 'react'
import Select from 'react-select'

import Table from '../../components/Table'
import AddWorkshopsModal from '../../components/AddWorkshopsModal'

import ModalsContext from '../../contexts/ModalsContext'

function WorkshopsAdminPage() {
  const { showWorkshopsModal, setShowWorkshopsModal } = useContext(ModalsContext)
    
  return (
    <div className='h-fit'>
        {showWorkshopsModal && <AddWorkshopsModal setShowWorkshopsModal={setShowWorkshopsModal} />}
        <Table />
    </div>
  )
}

export default WorkshopsAdminPage