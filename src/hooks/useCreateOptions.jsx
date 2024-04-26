import React from 'react'

function useCreateOptions(arrayOfObjects) {
 const options = arrayOfObjects.map(object => { 
        return {value: object.id, label: object.name}
      })

      return options
}

export default useCreateOptions