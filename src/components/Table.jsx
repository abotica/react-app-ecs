import React from 'react'
import TableRow from './TableRow'

function Table({dataArray, showDataProperties, setShowDeleteAffirmationModal, setDeleteData, setShowModal}) {

    return (
        <table className='w-full h-full'>
            <tbody>
                {dataArray.map(data => <TableRow key={data.id} rowData={data} showDataProperties={showDataProperties} setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} setDeleteData={setDeleteData} setShowModal={setShowModal}/>)}
            </tbody>
        </table>
    )
}

export default Table