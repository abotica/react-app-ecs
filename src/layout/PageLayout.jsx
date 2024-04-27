import React from 'react'

function PageLayout({ children, filters }) {
    
    return (
        <div className='flex'>
            <div className='[height-70vh] [width:30vw]'>
            Filteriiiiiiiiiiiiii
                {filters}
            </div>
            <div className='[height:70vh] [width:70vw] relative'>
            Djecaaaaaaaaaaaaaaaaa
                {children}
            </div>
        </div>
    )
}

export default PageLayout