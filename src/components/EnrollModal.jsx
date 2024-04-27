import React, { useState } from 'react'
import ModalLayout from '../layout/ModalLayout'
import EnrollModalForm from './EnrollModalForm'
import ModalAffirmationScreen from './ModalAffirmationScreen'

function EnrollModal({setShowEnrollModal, clickedWorkshopId}) {
    const [isSubmitting, setIsSubmitting] = useState(true)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')



  return (
    <ModalLayout handleCloseModal={() => setShowEnrollModal(false)}>
        {isSubmitting ? <EnrollModalForm setIsSubmitting={setIsSubmitting} clickedWorkshopId={clickedWorkshopId} setError={setError} setSuccess={setSuccess}/> : <ModalAffirmationScreen error={error} success={success} isLoading={isSubmitting}/>}
    </ModalLayout>
  )
}

export default EnrollModal