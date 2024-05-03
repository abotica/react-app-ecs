import React from 'react'
import TableRow from './TableRow'
import { useLocation } from 'react-router-dom'

function Table({ dataArray, showDataProperties, setShowDeleteAffirmationModal, setDeleteData, setShowModal }) {
    const location = useLocation()

    const headers = {
        '/administration/workshopsAdmin': ['IME RADIONICE', 'DATUM POČETKA', 'BROJ PRIJAVLJENIH', 'AKCIJE'],
        '/administration/organizationsAdmin': ['IME ORGANIZACIJE', 'AKCIJE'],
        '/administration/lecturersAdmin': ['IME PREDAVAČA', 'AKCIJE'],
    };

    return (
        <table className='w-full h-full text-center'>
            <thead>
                <tr>
                    {headers[location.pathname]?.map((header, index) => <th className='font-mina font-bold text-edit-blue py-5' key={index}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {dataArray.map(data => <TableRow key={data.id} rowData={data} showDataProperties={showDataProperties} setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} setDeleteData={setDeleteData} setShowModal={setShowModal} />)}
            </tbody>
        </table>
    )
}

export default Table