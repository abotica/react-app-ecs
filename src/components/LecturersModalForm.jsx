import React, { useContext, useEffect } from 'react'
import useCreateOptions from '../hooks/useCreateOptions';

import Select from 'react-select';
import LoadingSpinner from './ui/LoadingSpinner';
import Input from './ui/Input';
import Button from './ui/Button';

import axios from 'axios';

import UrlContext from '../contexts/UrlContext';

function LecturersModalForm({ isLoading, organizations, lecturer, setLecturer, setIsSubmitting, handlePost, editData, editDataId, handlePut }) {

    const { lecturersURL } = useContext(UrlContext)

    // options for select inputs
    const organizationsOptions = useCreateOptions(organizations)
    const topicsOptions = [
        { value: "react", label: "React" },
        { value: "express", label: "Express" },
        { value: "php", label: "PHP" },
        { value: "wordpress", label: "Wordpress" },
    ]

    // functions for handling events
    function handleOnChange(e) {
        setLecturer({
            ...lecturer,
            [e.target.name]: e.target.value
        })
    }
    function handleOnChangeSelectOrganization(selectedOption) {
        setLecturer({
            ...lecturer,
            organization: {
                id: selectedOption.value,
                name: selectedOption.label
            }
        })
    }
    function handleOnChangeSelectTopics(selectedOptions) {
        setLecturer({
            ...lecturer,
            topics: selectedOptions.map(topic => {
                return {
                    id: topic.value,
                    name: topic.label
                }
            })
        })
    }

    // useEffect for fetching data for editing
    useEffect(() => {
        if (editData) {
            axios.get(lecturersURL + `/${editDataId}`)
                .then(response => {
                    setLecturer(response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }, [])

    return isLoading ? <LoadingSpinner/> :
        <form className='flex flex-col h-max w-full' onSubmit={e => {
            e.preventDefault(); setIsSubmitting(true)
            if (editData) handlePut()
            else handlePost()
        }}>
            {editData ? <h2 className='font-mina font-bold text-center text-2xl text-edit-blue'>Uredi podatke o predavaču</h2> : <h2 className='font-mina font-bold text-center text-2xl text-edit-blue'>Dodaj predavača</h2>}
            <Input type='text' name='name' value={lecturer.name} handleOnChange={handleOnChange} placeholder='Ime i prezime predavača' />
            <Select className='my-4' defaultValue={organizationsOptions.filter(org => org.value === lecturer.organization.id)} value={lecturer.organization.value} onChange={selectedOption => handleOnChangeSelectOrganization(selectedOption)} options={organizationsOptions} placeholder='Odaberite organizaciju predavača' menuPortalTarget={document.body} styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} required />
            <Select className='my-4' isMulti defaultValue={topicsOptions.filter(topic => lecturer.topics.find(obj => obj.id === topic.value))} value={lecturer.topics.name} onChange={selectedOptions => handleOnChangeSelectTopics(selectedOptions)} options={topicsOptions} placeholder='Odaberite teme koje predavač predaje' menuPortalTarget={document.body} styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} required />
            <Input type='textarea' name='bio' value={lecturer.bio} handleOnChange={handleOnChange} placeholder='Opis predavača' />
            {editData ? <Button>Izmijeni podatke</Button> : <Button>Dodaj</Button>}
        </form>

}

export default LecturersModalForm