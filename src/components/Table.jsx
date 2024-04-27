import React, { Children } from 'react'
import TableRow from './TableRow'

function Table({dataArray, showDataProperties}) {



    return (
        <table className='w-full h-full border-spacing-1'>
            <tbody>
                {dataArray.map(data => <TableRow key={data.id} rowData={data} showDataProperties={showDataProperties}/>)}
            </tbody>
        </table>
    )
}

export default Table