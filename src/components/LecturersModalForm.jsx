import React from 'react'
import useCreateOptions from '../hooks/useCreateOptions';

import Select from 'react-select';

import LoadingSpinner from './ui/LoadingSpinner';
import Input from './ui/Input';
import Button from './ui/Button';

function LecturersModalForm({ isLoading, organizations, lecturer, setLecturer, setIsSubmitting, handlePost }) {

    const organizationsOptions = useCreateOptions(organizations)
    const topicsOptions = [
        { value: "react", label: "React" },
        { value: "express", label: "Express" },
        { value: "php", label: "PHP" },
        { value: "wordpress", label: "Wordpress" },
    ]

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



    return isLoading ? <LoadingSpinner spin={true} /> :
        <form className='flex flex-col h-max w-full' onSubmit={e => { e.preventDefault(); setIsSubmitting(true); handlePost() }}>
            <h2>Dodaj predavača</h2>
            <Input type='text' name='name' value={lecturer.name} handleOnChange={handleOnChange} placeholder='Ime i prezime predavača' />
            <Select className='my-4' value={lecturer.organization.value} onChange={selectedOption => handleOnChangeSelectOrganization(selectedOption)} options={organizationsOptions} placeholder='Odaberite organizaciju predavača' menuPortalTarget={document.body} styles={{menuPortal: base => ({...base, zIndex: 9999})}} required />
            <Select className='my-4' isMulti value={lecturer.topics.name} onChange={selectedOptions => handleOnChangeSelectTopics(selectedOptions)} options={topicsOptions} placeholder='Odaberite teme koje predavač predaje' menuPortalTarget={document.body} styles={{menuPortal: base => ({...base, zIndex: 9999})}} required />
            <Button>Dodaj</Button>
        </form>

}

export default LecturersModalForm