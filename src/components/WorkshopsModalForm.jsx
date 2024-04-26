import React from 'react'

import useCreateOptions from '../hooks/useCreateOptions'

import LoadingSpinner from './ui/LoadingSpinner'
import Button from './ui/Button'
import Input from './ui/Input'
import Select from 'react-select'

function WorkshopsModalForm({ isLoading, lecturers, workshop, setWorkshop, setIsSubmitting }) {

    // options for select inputs
    const lecturerOptions = useCreateOptions(lecturers.data)
    const topicsOptions = [
        { value: "react", label: "React" },
        { value: "express", label: "Express" },
        { value: "next_js", label: "Next.js" },
    ]

    // functions for handling events
    function handleOnChange(e) {
        setWorkshop({
            ...workshop,
            [e.target.name]: e.target.value
        }) 
    }
    function handleOnChangeSelectTopic(selectedOption) {
        console.log(selectedOption)
        setWorkshop({
            ...workshop,
            topic: {
                id: selectedOption.value,
                name: selectedOption.label
            }
        })
    }

    function handleOnChangeSelectLecturers(selectedOptions) {
        console.log(selectedOptions)
        setWorkshop({
            ...workshop,
            lecturers: selectedOptions.map(lecturer => {
                return {
                    id: lecturer.value,
                    name: lecturer.label
                }
            })
        })
        console.log(workshop)
    }

    return isLoading ? <LoadingSpinner spin={isLoading} /> :
        <form className='flex flex-col h-max w-full' onSubmit={e => { e.preventDefault(); setIsSubmitting(true) }}>
            <h2 className='text-2xl font-bold text-center'>Dodaj radionicu</h2>
            <Input type='text' name='name' value={workshop.name} handleOnChange={handleOnChange} placeholder='Naziv radionice' />
            <Input type='date' name='date' value={workshop.date} handleOnChange={handleOnChange} placeholder='Datum održavanja' />
            <Select className='my-4' value={workshop.topic.value} onChange={selectedOption => handleOnChangeSelectTopic(selectedOption)} options={topicsOptions} placeholder='Tema radionice' required />
            <Select className='my-4' value={workshop.lecturers.name} onChange={selectedOptions => handleOnChangeSelectLecturers(selectedOptions)} isMulti options={lecturerOptions} placeholder='Predavači radionice' required />
            <Input type='textarea' name='description' value={workshop.description} handleOnChange={handleOnChange} placeholder='Opis radionice' />
            <Button>Dodaj</Button>
        </form>

}

export default WorkshopsModalForm