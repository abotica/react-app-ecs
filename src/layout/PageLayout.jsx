import React from 'react';

import { useLocation } from 'react-router-dom';

import WorkshopsFilters from '../components/WorkshopsFilters';
import LecturersFilters from '../components/LecturersFilters';

function PageLayout({ children, filterOptions, selectedFilters, setSelectedFilters, items, setFilteredItems}) {
const location = useLocation()
console.log(location)
    return (
        <div className='flex'>
            <div className='h-fit w-3/12'>
               {location.pathname === '/workshops' && <WorkshopsFilters filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={items} setFilteredItems={setFilteredItems}/> }
               {location.pathname === '/lecturers' && <LecturersFilters filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={items} setFilteredItems={setFilteredItems}/>}
            </div>
            <div className='h-fit w-9/12 relative flex flex-wrap p-5 justify-around'>
                {children}
            </div>
        </div>
    );
}

export default PageLayout;