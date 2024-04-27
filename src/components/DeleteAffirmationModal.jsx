import React from 'react'
import ModalLayout from '../layout/ModalLayout'
import Button from './ui/Button'

function DeleteAffirmationModal({ setShowDeleteAffirmationModal }) {

    return (
        <ModalLayout handleCloseModal={() => setShowDeleteAffirmationModal(false)}>

            <div className='flex flex-col'>
                <h2>Jeste li sigurni da želite obrisati željeni podatak?</h2>
                <div className='flex justify-center items-center'>
                    <Button>Da, obriši</Button>
                    <Button>Odustani</Button>
                </div>
            </div>
        </ModalLayout>
    )
}

export default DeleteAffirmationModal