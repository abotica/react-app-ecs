import React from 'react'
import ModalLayout from '../layout/ModalLayout'
import Button from './ui/Button'

function DeleteAffirmationModal({ setShowDeleteAffirmationModal, handleDelete, dataName }) {

    return (
        <ModalLayout handleCloseModal={() => setShowDeleteAffirmationModal(false)}>

            <div className='flex flex-col'>
                <h2>Jeste li sigurni da želite obrisati {dataName}?</h2>
                <div className='flex justify-center items-center'>
                    <Button onClick={() => {handleDelete(); setShowDeleteAffirmationModal(false)}}>Da, obriši</Button>
                    <Button onClick={() => setShowDeleteAffirmationModal(false)}>Odustani</Button>
                </div>
            </div>
        </ModalLayout>
    )
}

export default DeleteAffirmationModal