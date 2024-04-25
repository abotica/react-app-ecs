import React, { useContext } from 'react'

import ModalsContext from '../contexts/ModalsContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import {v4 as uuidv4} from 'uuid'

function AddWorkshopsModal() {
  const {showWorkshopsModal, setShowWorkshopsModal} = useContext(ModalsContext)

  function handleOnClick(){
    setShowWorkshopsModal(!showWorkshopsModal)
  }

  return showWorkshopsModal ? (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm'>
        <div className='bg-white rounded-xl shadow p-6 transition-all relative [width:50%] [height:50%]'>
          <FontAwesomeIcon onClick={handleOnClick} icon={faXmark} size='2xl' className='absolute -top-3 -right-2 cursor-pointer text-edit-blue hover:scale-125 transition-transform' />
            
        </div>
    </div>
  )
  :
  null
}

export default AddWorkshopsModal