import React from 'react'

function TableRow({rowData}) {
  return (
    <tr className='hover:bg-sky-200 border-b-2'>
        <td className='px-1 border-collapse'>Data1</td>
        <td className='px-1 border-collapse'>Data2</td>
        <td className='px-1 border-collapse'>Data3</td>
        <td className='px-1 border-collapse'>Data4</td>
        <td className='px-1 border-collapse'>Data5</td>
    </tr>
  )
}

export default TableRow