import React from 'react'
import AppNavigation from './templates/AppNavigation'
import Charts from './templates/Charts'

const MainContent = () => {
    return (
        <section>
            <div className='flex'>
                <AppNavigation />
                <Charts />
            </div>
        </section>
    )
}

export default MainContent