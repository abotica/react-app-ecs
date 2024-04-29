import React from 'react'
import TableRow from './TableRow'

function Table({dataArray, showDataProperties, setShowDeleteAffirmationModal, setdeleteData, setShowLecturersModal}) {

    return (
        <table className='w-full h-full'>
            <tbody>
                {dataArray.map(data => <TableRow key={data.id} rowData={data} showDataProperties={showDataProperties} setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} setdeleteData={setdeleteData} setShowLecturersModal={setShowLecturersModal}/>)}
            </tbody>
        </table>
    )
}

export default Table