import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function LoadingSpinner({ spin }) {

  return spin && (<FontAwesomeIcon className='text-edit-blue absolute m-auto left-0 right-0 top-0 bottom-0' icon={faSpinner} spin size='3x' />)

}

export default LoadingSpinner