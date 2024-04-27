import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function ModalLayout({children, handleCloseModal}) {
  return (
    //backdrop 
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm z-50'>
    <div className='bg-white rounded-xl shadow p-4 transition-all relative w-2/6 h-fit flex justify-center'>
        <FontAwesomeIcon onClick={handleCloseModal} icon={faXmark} size='2xl' className='absolute -top-3 -right-2 cursor-pointer text-edit-blue hover:scale-125 transition-transform' />
        {children}
      </div>
    </div>
  )
}

export default ModalLayout