import React, { useEffect } from 'react'

import Button from './ui/Button'
import { set } from 'lodash'

function WorkshopsFilters({ filterOptions, selectedFilters, setSelectedFilters, items, setFilteredItems}) {

  function handleFilterClick(option) {
    if(selectedFilters.includes(option)) {
      let filters = selectedFilters.filter( filter => filter !== option)
      setSelectedFilters(filters)
    }
    else {
      setSelectedFilters([...selectedFilters, option])
    }
  }

  useEffect(() => {
    filterItems()
  }, [selectedFilters])


  function filterItems() {
    // If no filters are selected, return all items
    if (selectedFilters.length === 0) {
      setFilteredItems(items);
      return;
    }
  
    let tempItems = items.filter(item => {
      
      // Separate the selected filters into topic filters and difficulty filters
      const topicFilters = selectedFilters.filter(filter => filterOptions[0].options.includes(filter));
      const difficultyFilters = selectedFilters.filter(filter => filterOptions[1].options.includes(filter));
  
      // Check if the item's topic matches any selected topic filters
      const matchesTopic = topicFilters.length === 0 || topicFilters.includes(item.topic.name);
  
      // Check if the item's difficulty matches any selected difficulty filter
      const matchesDifficulty = difficultyFilters.length === 0 || difficultyFilters.includes(item.difficulty.name);
  
      // Include the item if it matches any selected topic filters and any selected difficulty filters
      return matchesTopic && matchesDifficulty;
    });
    
    setFilteredItems(tempItems);
  }
      

  return (
    <div>
      {filterOptions.map(filterOption => (
        <div key={filterOption.id}>
          <p className='text-2xl font-semibold' >{filterOption.name}</p>
          {filterOption.options.map(option => (
            <div key={option}  className='flex flex-col'><Button className={`${selectedFilters.includes(option) && 'active'} [&.active]:bg-edit-blue [&.active]:text-white [&.active]:hover:text-white my-1 before:hidden hover:text-edit-blue`} onClick={() => handleFilterClick(option)}>{option}</Button></div>
          ))}
        </div>
      )
      )}
    </div>
  )
}

export default WorkshopsFilters