import React, { Children } from 'react'
import TableRow from './TableRow'

function Table({dataArray, showDataProperties, setShowDeleteAffirmationModal, setdeleteData}) {



    return (
        <table className='w-full h-full'>
            <tbody>
                {dataArray.map(data => <TableRow key={data.id} rowData={data} showDataProperties={showDataProperties} setShowDeleteAffirmationModal={setShowDeleteAffirmationModal} setdeleteData={setdeleteData}/>)}
            </tbody>
        </table>
    )
}

export default Table