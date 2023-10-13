import React from 'react'
import Link from 'next/link'

const SharepadLayout = ({ children, title, description}) => {
    return(
        
        <div className="w-full flex flex-col xl:flex-row gap-5">
            <div className='w-48 gap-3 flex flex-col flex-shrink-0'>
                <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-green-600'>Virtual Tech Village</h1>
                    <div className='w-full flex flex-col gap-2 pl-2'>
                        <Link href='/virtual_tech_village/sharepad'>
                            <h1 className={
                              title === 'knowledgehub'
                                ? 'border-l-4 pl-2 border-green-600'
                                : 'hover:border-l-4 pl-2'}
                            >
                                Knowledgehub
                            </h1>
                        </Link>

                        <Link href='/virtual_tech_village/events'>
                            <h1 className={
                              title === 'events'
                                ? 'border-l-4 pl-2 border-green-600'
                                : 'hover:border-l-4 pl-2'}
                            >
                                Events
                            </h1>
                        </Link>
                       
                        <Link href='/virtual_tech_village/resources'>
                            <h1 className={
                              title === 'resources'
                                ? 'border-l-4 pl-2 border-green-600'
                                : 'hover:border-l-4 pl-2'}
                            >
                                Resources
                            </h1>
                        </Link>

                        <Link href='/virtual_tech_village/careers'>
                            <h1 className={
                              title === 'careers'
                                ? 'border-l-4 pl-2 border-green-600'
                                : 'hover:border-l-4 pl-2'}
                            >
                                Careers
                            </h1>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className='flex py-3 px-5 overflow-x-hidden flex-grow shadow rounded h-max flex-col flex-shrink-0'>
                
                { children }
            </div>
        </div>

    )
}

export default SharepadLayout