import React, { useContext, useEffect, useState } from 'react'

import UrlContext from '../contexts/UrlContext'
import CommonStatesContext from '../contexts/CommonStatesContext'

import axios from 'axios'

import { v4 as uuidv4 } from 'uuid'

import ModalLayout from '../layout/ModalLayout'

import ModalAffirmationScreen from './ModalAffirmationScreen'
import LecturersModalForm from './LecturersModalForm'

function LecturersModal({ setShowLecturersModal, handleDataRefresh, editDataId }) {

    const { lecturersURL, organizationsURL } = useContext(UrlContext)
    const {editData, setEditData} = useContext(CommonStatesContext)

    const [isLoading, setIsLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [organizations, setOrganizations] = useState([])
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [lecturer, setLecturer] = useState(
        {
            id: uuidv4(),
            name: '',
            bio: '',
            organization: '',
            topics: []
        }
    )

    function handleCloseModal() {
        setShowLecturersModal(false)
    }

    useEffect(() => {
        axios.get(organizationsURL)
            .then(response => {
                setOrganizations(response.data)
                setIsLoading(false)
            })
    }, [])


    function handlePost() {
        axios.post(lecturersURL, lecturer)
            .then(() => {
                setIsLoading(false)
                setSuccess('Predavač uspješno dodan!')
                handleDataRefresh()
            })
            .catch(error => {
                setError('Nešto je pošlo po krivu')
                console.error(error)
            })
    }

    function handlePut() {
        axios.put(lecturersURL + `/${editDataId}`, lecturer)
            .then(() => {
                setIsLoading(false)
                setSuccess('Predavač uspješno izmijenjen!')
                handleDataRefresh()
            })
            .catch(error => {
                setError('Nešto je pošlo po krivu')
                console.error(error)
            })
    }


    return (
        <ModalLayout handleCloseModal={handleCloseModal}>
            {isSubmitting ? <ModalAffirmationScreen error={error} success={success} isLoading={isLoading}/> : <LecturersModalForm isLoading={isLoading} organizations={organizations} lecturer={lecturer} setLecturer={setLecturer} setIsSubmitting={setIsSubmitting} handlePost={handlePost} editDataId={editDataId} editData={editData} setEditData={setEditData} handlePut={handlePut}/>}
        </ModalLayout>
    )
}

export default LecturersModal