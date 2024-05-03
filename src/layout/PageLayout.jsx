import React, { useContext, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import WorkshopsFilters from '../components/WorkshopsFilters';
import LecturersFilters from '../components/LecturersFilters';
import LoadingSpinner from '../components/ui/LoadingSpinner';

import Button from '../components/ui/Button';

import AdminContext from '../contexts/AdminContext';


function PageLayout({ children, filterOptions, selectedFilters, setSelectedFilters, items, setFilteredItems, setIsLoading, isLoading, setShowModal}) {
const location = useLocation()
const {isAdmin} = useContext(AdminContext)

// mimicking loading state because filtering is very fast on small arrays
useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 300)
}, [selectedFilters])

    return (
        <div className='flex flex-col'>
            <div className='w-full h-10 flex justify-end items-end'>{isAdmin && <Button onClick={() => setShowModal(true)}  className='mr-16 before:bg-edit-yellow border-edit-yellow text-edit-yellow'>{location.pathname === '/workshops' ? 'Dodaj radionicu' : 'Dodaj predavača'}</Button>}</div>
            <div className='flex'>
                <div className='h-full w-3/12 pr-20 pl-5 flex flex-col relative'>
                   {location.pathname === '/workshops' && <WorkshopsFilters filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={items} setFilteredItems={setFilteredItems}/> }
                   {location.pathname === '/lecturers' && <LecturersFilters filterOptions={filterOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} items={items} setFilteredItems={setFilteredItems}/>}
                </div>
                <div className='h-fit w-9/12 relative flex flex-wrap p-5 justify-around'>
                    {isLoading ? <LoadingSpinner /> : children}
                </div>
            </div>
        </div>
    );
}

export default PageLayout;