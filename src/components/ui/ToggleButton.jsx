import React, { useContext } from 'react'
import AdminContext from '../../contexts/AdminContext'

function ToggleButton() {
    const {isAdmin, setIsAdmin} = useContext(AdminContext)

    const handleCheckboxChange = () => {
        setIsAdmin(!isAdmin)
    }

    return (
        <>
            <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center border border-gray-200 rounded-full drop-shadow-lg-white'>
                <input
                    type='checkbox'
                    name='autoSaver'
                    className='sr-only'
                    checked={isAdmin}
                    onChange={handleCheckboxChange}
                />
                <span
                    className={`slider flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${isAdmin ? 'bg-edit-yellow' : 'bg-edit-blue'
                        }`}
                >
                    <span
                        className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${isAdmin ? 'translate-x-6' : ''
                            }`}
                    ></span>
                </span>
            </label>
            <span className='label flex items-center text-sm font-medium text-white '>
                    <span className='pr-2 pl-2'> {isAdmin ? 'ADMIN' : 'USER'} </span>
            </span>
        </>
    )
}

export default ToggleButton