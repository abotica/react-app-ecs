import React from 'react'
import TableRow from './TableRow'
import { useLocation } from 'react-router-dom'

function Table({ dataArray, showDataProperties, setShowDeleteAffirmationModal, setDeleteData, setShowModal }) {
    const location = useLocation()

    const headers = {
        '/administration/workshopsAdmin': ['IME RADIONICE', 'DATUM POČETKA', 'BROJ PRIJAVLJENIH', 'UPRAVLJANJE'],
        '/administration/organizationsAdmin': ['IME ORGANIZACIJE', 'UPRAVLJANJE'],
        '/administration/lecturersAdmin': ['IME PREDAVAČA', 'UPRAVLJANJE'],
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
                {dataArray.length === 0 && <tr><td colSpan={headers[location.pathname].length} className='font-mina font-bold text-edit-blue py-10 text-2xl'>Trenutno nema podataka</td></tr>}
            </tbody>
        </table>
    )
}

export default Table