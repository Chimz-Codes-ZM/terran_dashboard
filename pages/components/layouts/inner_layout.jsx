import React from 'react';
import Link from 'next/link';

const inner_layout = ({ children, title, description}) => {
     const isItemSelected = () => selectedItem === itemName;
    
    return(
        
        <div className="w-full flex flex-col xl:flex-row gap-5">
            <div className='w-48 gap-3 flex flex-col flex-shrink-0'>
                <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-green-600'>Virtual Tech Village</h1>
                    <div className='w-full flex flex-col gap-2 pl-2'>
                        <Link href='/virtual_tech_village'>
                            <h1 className={
                              title === 'village home'
                                ? 'border-l-4 pl-2 border-green-600'
                                : 'hover:border-l-4 pl-2'}
                            >
                                Home
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

};

export default inner_layout;