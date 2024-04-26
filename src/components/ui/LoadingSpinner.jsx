import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function LoadingSpinner({ spin }) {

  return spin && (<FontAwesomeIcon className='text-edit-blue absolute object-center' icon={faSpinner} spin size='3x' />)

}

export default LoadingSpinner