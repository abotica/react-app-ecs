import React, { Children } from 'react'
import TableRow from './TableRow'

function Table({dataArray, showDataProperties, handleDataRefresh, setShowDeleteAffirmationModal}) {



    return (
        <table className='w-full h-full'>
            <tbody>
                {dataArray.map(data => <TableRow key={data.id} rowData={data} showDataProperties={showDataProperties} handleDataRefresh={handleDataRefresh} setShowDeleteAffirmationModal={setShowDeleteAffirmationModal}/>)}
            </tbody>
        </table>
    )
}

export default Table