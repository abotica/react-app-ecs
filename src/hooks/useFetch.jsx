import { useState, useEffect } from 'react'

import axios from 'axios'

// useFetch is a custom hook that takes a url, method and body as arguments and returns data, isLoading and error
// it is a common practice to make hooks that look like this one
// it is useful because I can handle any axios request in one place and reuse it in multiple components
// also I can easilly handle showing loading indicator and error message
function useFetch(url, method, body) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {

    async function fetchData() {

      try {
        const response = await axios({
          url: url,
          method: method,
          data: body
        })
  
        const data = await response?.data
  
        setData(data)
        setIsLoading(false)
      }
      catch (error) {
        setError(error)
        setIsLoading(false)
      }
  
    }

    fetchData()

  }, [url, method, body])


  return { data, isLoading, error }
}

export default useFetch