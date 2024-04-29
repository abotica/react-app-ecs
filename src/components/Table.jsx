import React, { Children } from 'react'
import TableRow from './TableRow'

function Table({dataArray, showDataProperties, setShowDeleteAffirmationModal, setdeleteData, setEditLecturersData, setShowLecturersModal}) {



    return (
        <table className='w-full h-full'>
            <tbody>
                {dataArray.map(data => <TableRow key={data.id} rowData={data} showDataProperties={showDataProperties} setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} setdeleteData={setdeleteData} setEditLecturersData={setEditLecturersData} setShowLecturersModal={setShowLecturersModal}/>)}
            </tbody>
        </table>
    )
}

export default Table