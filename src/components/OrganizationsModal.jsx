import React, { useContext, useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import ModalLayout from '../layout/ModalLayout'

import ModalAffirmationScreen from './ModalAffirmationScreen'
import OrganizationsModalForm from './OrganizationsModalForm'

import axios from 'axios'

import UrlContext from '../contexts/UrlContext'
import CommonStatesContext from '../contexts/CommonStatesContext'

function OrganizationsModal({ setShowOrganizationsModal, handleDataRefresh, editDataId }) {

    const { organizationsURL, workshopsURL } = useContext(UrlContext)
    const {editData} = useContext(CommonStatesContext)

    const [isLoading, setIsLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [workshops, setWorkshops] = useState([])
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [organization, setOrganization] = useState({
        id: uuidv4(),
        name: '',
        workshops: [],
        description: ''
    })

    useEffect(() => {
        axios.get(workshopsURL)
            .then(response => {
                setWorkshops(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    function handlePost() {
        axios.post(organizationsURL, organization)
            .then(() => {
                setIsLoading(false)
                setSuccess('Organizacija uspješno dodana!')
                handleDataRefresh()
            })
            .catch(() => {
                setIsLoading(false)
                setError('Došlo je do pogreške prilikom dodavanja organizacije!')
            })
    }

    function handleCloseModal() {
        setShowOrganizationsModal(false)
    }

    function handlePut() {
        axios.put(organizationsURL + `/${editDataId}`, organization)
            .then(() => {
                setIsLoading(false)
                setSuccess('Organizacija uspješno izmijenjena!')
                handleDataRefresh()
            })
            .catch(error => {
                setError('Nešto je pošlo po krivu')
                console.error(error)
            })
    }

    return (
        <ModalLayout handleCloseModal={handleCloseModal}>
            {isSubmitting ? <ModalAffirmationScreen error={error} success={success} isLoading={isLoading} /> : <OrganizationsModalForm isLoading={isLoading} workshops={workshops} organization={organization} setOrganization={setOrganization} setIsSubmitting={setIsSubmitting} handlePost={handlePost} editDataId={editDataId} editData={editData} handlePut={handlePut}/>}
        </ModalLayout>
    )
}

export default OrganizationsModal