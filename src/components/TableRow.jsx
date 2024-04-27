import React from 'react'

function TableRow({rowData, showDataProperties}) {
  return (
    <tr className='hover:bg-sky-200 border-b-2'>
        {showDataProperties.map(property => <td key={property} className='px-1 border-collapse'>{rowData[property]}</td>)}
    </tr>
  )
}

export default TableRow