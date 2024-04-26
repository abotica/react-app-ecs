import React from 'react'
import useFetch from '../hooks/useFetch'

import LoadingSpinner from './ui/LoadingSpinner'

function ModalAffirmationScreen({workshopsURL, workshop}) {
  const {isLoading, error} = useFetch(workshopsURL, "POST", workshop)

  return (
    <div className='w-max h-max'>
      {isLoading ? <LoadingSpinner spin={isLoading} /> : error ? <p>Nešto je pošlo po krivu</p> : <p>Radionica je uspješno dodana!</p> }
    </div>
  )
}

export default ModalAffirmationScreen