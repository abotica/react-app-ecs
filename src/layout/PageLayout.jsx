import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import WorkshopsFilters from '../components/WorkshopsFilters';
import LecturersFilters from '../components/LecturersFilters';
import LoadingSpinner from '../components/ui/LoadingSpinner';

function PageLayout({ children, filterOptions, selectedFilters, setSelectedFilters, items, setFilteredItems, setIsLoading, isLoading}) {
const location = useLocation()

useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 500)


}, [selectedFilters])
    return (
        <div className='flex pt-10'>
            <div className='h-full w-3/12 pr-20 pl-5 flex flex-col relative'>
               {location.pathname === '/workshops' && <WorkshopsFilters filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={items} setFilteredItems={setFilteredItems}/> }
               {location.pathname === '/lecturers' && <LecturersFilters filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={items} setFilteredItems={setFilteredItems}/>}
            </div>
            <div className='h-fit w-9/12 relative flex flex-wrap p-5 justify-around'>
                {isLoading ? <LoadingSpinner spin={true} /> : children}
            </div>
        </div>
    );
}

export default PageLayout;