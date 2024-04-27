import React, { useContext, useState } from 'react'

import Button from './ui/Button'
import Input from './ui/Input'

import axios from 'axios'

import UrlContext from '../contexts/UrlContext'

function EnrollModalForm({ setIsSubmitting, clickedWorkshopId, setError, setSuccess }) {
    const { workshopsURL } = useContext(UrlContext)




    function handlePost() {

        axios.get(workshopsURL + `/${clickedWorkshopId}`)
            .then(response => {
                const enrolled = response.data.enrolled

                axios.patch(workshopsURL + `/${clickedWorkshopId}`, { enrolled: enrolled + 1 })
                    .then(() => {
                        setIsSubmitting(false)
                        setSuccess('Uspješno ste se prijavili na radionicu!')
                    })
                    .catch(error => {
                        console.error(error)
                        setError('Došlo je do pogreške prilikom prijave na radionicu.')
                    })

            })
            .catch(error => {
                console.error(error)
                setError('Došlo je do pogreške prilikom prijave na radionicu.')
            })

    }

    return (
        <form className='flex flex-col h-max w-full' onSubmit={e => { e.preventDefault(); setIsSubmitting(true); handlePost() }}>
            <Input type='text' placeholder='Ime' />
            <Input type='email' placeholder='Email' />
            <Input type='textarea' placeholder='Razlog prijave' />
            <Button >Prijavi se</Button>
        </form>
    )
}

export default EnrollModalForm