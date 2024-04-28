import React from 'react'

import Input from './ui/Input'
import Select from 'react-select'
import useCreateOptions from '../hooks/useCreateOptions'
import LoadingSpinner from './ui/LoadingSpinner'
import Button from './ui/Button'

function OrganizationsModalForm({ isLoading, workshops, organization, setOrganization, setIsSubmitting, handlePost }) {

    const workshopOptions = useCreateOptions(workshops)


    function handleOnChange(e) {
        setOrganization({
            ...organization,
            [e.target.name]: e.target.value
        })
    }

    function handleOnChangeSelectWorkshops(selectedOptions) {
        console.log(selectedOptions)
        setOrganization({
            ...organization,
            workshops: selectedOptions.map(workshop => {
                return {
                    id: workshop.value,
                    name: workshop.label
                }
            })
        })
        console.log(organization)
    }

    return isLoading ? <LoadingSpinner spin={true} /> :
        <form className='flex flex-col h-max w-full' onSubmit={e => { e.preventDefault(); setIsSubmitting(true); handlePost() }}>
            <h2 className='text-2xl font-bold text-center'>Dodaj organizaciju</h2>
            <Input handleOnChange={handleOnChange} type='text' name='name' placeholder='Naziv organizacije' />
            <Select className='my-4' value={organization.workshops.name} onChange={selectedOptions => handleOnChangeSelectWorkshops(selectedOptions)} isMulti options={workshopOptions} placeholder='Radionice koje organiziraju' menuPortalTarget={document.body} styles={{menuPortal: base => ({...base, zIndex: 9999})}} required />
            <Button>Dodaj</Button>
        </form>

}

export default OrganizationsModalForm