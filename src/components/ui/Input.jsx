import React from 'react'

function Input({ type, placeholder, handleOnChange, name, value }) {
    return type === 'textarea' ?
        (
            <textarea value={value} name={name} onChange={handleOnChange} maxLength={250} placeholder={placeholder} className='w-full border-b-2 border-gray-300 focus:outline-none focus:border-edit-blue p-2 my-4' required />)
        :
        (
            <input value={value} name={name} onChange={handleOnChange} type={type} placeholder={placeholder} className='w-full border-b-2 border-gray-300 focus:outline-none focus:border-edit-blue p-2 my-4' required />
        )
}

export default Input