import React, { Children } from 'react'
import TableRow from './TableRow'

function Table() {



    return (
        <table className='w-full h-full border-spacing-1'>
            <thead>
                <TableRow />
            </thead>
            <tbody>
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
            </tbody>
        </table>
    )
}

export default Table