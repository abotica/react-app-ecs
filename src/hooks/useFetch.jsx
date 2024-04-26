import { useState, useEffect } from 'react'

import axios from 'axios'

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