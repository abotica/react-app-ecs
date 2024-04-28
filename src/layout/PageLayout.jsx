import React, { useState } from 'react';

function PageLayout({ children, filters, filterValues, setFilterValues}) {
    

    const handleCheckboxChange = (filterId, option) => {
        setFilterValues((prevValues) => ({
            ...prevValues,
            [filterId]: {
                ...prevValues[filterId],
                [option]: !prevValues[filterId]?.[option],
            },
        }));
    };

    console.log(filterValues);

    return (
        <div className='flex'>
            <div className='h-fit w-3/12'>
                {filters.map((filter) => (
                    <div key={filter.name} className='h-fit w-4/12 bg-white shadow-md p-5 my-2'>
                        <p className='font-semibold text-lg'>{filter.name}</p>
                        {filter.options.map((option) => (
                            <div key={option} className='flex items-center'>
                                <label htmlFor={option} className='mr-2 font-thin'>
                                    {option}
                                </label>
                                <input
                                    id={option}
                                    type='checkbox'
                                    className='my-1 hover:cursor-pointer'
                                    checked={filterValues[filter.id]?.[option] || false}
                                    onChange={() => handleCheckboxChange(filter.id, option)}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='h-fit w-9/12 relative flex flex-wrap p-5 justify-around'>
                {children}
            </div>
        </div>
    );
}

export default PageLayout;