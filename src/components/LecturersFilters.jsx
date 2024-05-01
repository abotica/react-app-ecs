import React, { useEffect } from 'react'

import Button from './ui/Button'

function LecturersFilters({ filterOptions, selectedFilters, setSelectedFilters, items, setFilteredItems }) {


    function handleFilterClick(option) {
        if (selectedFilters.includes(option)) {
            setSelectedFilters(selectedFilters.filter(filter => filter !== option));
        } else {
            setSelectedFilters([...selectedFilters, option]);
        }

        filterItems();
    }

    useEffect(() => {
        filterItems();
      }, [selectedFilters, items]);

      function filterItems() {
        // If no filters are selected, return all items
        if (selectedFilters.length === 0) {
          setFilteredItems(items);
          return;
        }
      
        let tempItems = items.filter(item => {
          // Separate the selected filters into topic filters and organization filters
          const topicFilters = selectedFilters.filter(filter => filterOptions[0].options.includes(filter));
          const organizationFilters = selectedFilters.filter(filter => filterOptions[1].options.includes(filter));
      
          // Check if the item's topics include any selected topic filters
          const matchesTopics = topicFilters.length === 0 || topicFilters.some(filter => item.topics.some(topic => topic.name === filter));
      
          // Check if the item's organization matches any selected organization filter
          const matchesOrganization = organizationFilters.length === 0 || organizationFilters.includes(item.organization.name);
      
          // Include the item if it matches any selected topic filters and any selected organization filter
          return matchesTopics && matchesOrganization;
        });
      
        setFilteredItems(tempItems);
      }


    return (
        <div>
            {filterOptions.map(filterOption => (
                <div key={filterOption.id}>
                    <p className='text-2xl font-semibold' >{filterOption.name}</p>
                    {filterOption.options.map(option => (
                        <div key={option} className='flex flex-col'><Button className={`${selectedFilters.includes(option) && 'active'} [&.active]:bg-edit-blue [&.active]:text-white [&.active]:hover:text-white my-1 before:hidden hover:text-edit-blue`} onClick={() => handleFilterClick(option)}>{option}</Button></div>
                    ))}
                </div>
            )
            )}
        </div>
    )
}

export default LecturersFilters