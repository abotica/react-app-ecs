import { useMemo } from 'react';

// useCreateOptions is a custom hook that takes an array of objects and returns an array of objects with value and label properties
// it is very useful when you want to create options for a select input especially when data is fetched from an API
function useCreateOptions(data) {
  return useMemo(() => {
    if (!data) {
      return []
    }

    return data.map(item => ({
      value: item.id,
      label: item.name,
    }))
  }, [data]);
}

export default useCreateOptions;