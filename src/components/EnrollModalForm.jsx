import React, { useContext, useState } from 'react'

import Button from './ui/Button'
import Input from './ui/Input'

import axios from 'axios'

import UrlContext from '../contexts/UrlContext'

function EnrollModalForm({ setIsSubmitting, clickedWorkshopId, setError, setSuccess, enrollmentData, setEnrollmentData}) {
    const { workshopsURL } = useContext(UrlContext)
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const [emailError, setEmailError] = useState(false)

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
                        setError('Došlo je do pogreške prilikom prijave na radionicu')
                    })

            })
            .catch(error => {
                console.error(error)
                setError('Došlo je do pogreške prilikom prijave na radionicu.')
            })

    }

    function handleOnChange(e) {
        const { name, value } = e.target
        if (name === 'email') {
            if (!emailRegex.test(value)) {
                setEmailError(true)
            }
            else{
                setEmailError(false)
            }
        }
        setEnrollmentData({ ...enrollmentData, [name]: value })
    }



    return (
        <form className='flex flex-col h-max w-full' onSubmit={e => { e.preventDefault(); setIsSubmitting(true); handlePost() }}>
            <Input name='name' value={enrollmentData.name} handleOnChange={e => handleOnChange(e)} type='text' placeholder='Ime' />
            <Input name='email' value={enrollmentData.email} handleOnChange={e => handleOnChange(e)} type='email' placeholder='Email' required={emailError}/>
            {emailError && enrollmentData.email.length > 0 && <p className='text-red-500 text-sm'>Unesite ispravnu email adresu</p>}
            {!emailError && enrollmentData.email.length > 0 && <p className='text-green-500 text-sm'>Email adresa je ispravna</p>}
            <Input name='reason' value={enrollmentData.reason} handleOnChange={e => handleOnChange(e)} type='textarea' placeholder='Razlog prijave' />
            <Button disabled={emailError}>Prijavi se</Button>
        </form>
    )
}

export default EnrollModalForm