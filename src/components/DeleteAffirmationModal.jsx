import React from 'react'
import ModalLayout from '../layout/ModalLayout'
import Button from './ui/Button'

function DeleteAffirmationModal({ setShowDeleteAffirmationModal, handleDelete, dataName }) {

    return (
        <ModalLayout handleCloseModal={() => setShowDeleteAffirmationModal(false)}>

            <div className='flex flex-col font-mina '>
                <h2>Jeste li sigurni da želite obrisati „<span className='font-bold'>{dataName}</span>“?</h2>
                <div className='flex justify-evenly items-center mt-5'>
                    <Button onClick={() => {handleDelete(); setShowDeleteAffirmationModal(false)}}>Da, obriši</Button>
                    <Button onClick={() => setShowDeleteAffirmationModal(false)}>Odustani</Button>
                </div>
            </div>
        </ModalLayout>
    )
}

export default DeleteAffirmationModal