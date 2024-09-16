'use client'

import React, { useState } from 'react'
import { navigationMenu } from '../_constants'
import Image from 'next/image'

const Navigation = () => {

    const [selected] = useState(7);

    return (
        <div className='bg-neutral h-dvh'>
            <div className='mt-1 flex flex-col'>
                {navigationMenu.map(menu => (
                    <div key={menu.id} className='w-full h-14 flex flex-col justify-center items-center relative'>
                        <Image src={menu.icon} width={24} height={24} alt={`${menu.title} Icon`} />
                        <p className={`${selected === menu.id ? 'text-secondary' : 'text-primary'} text-[10px] text-center`}>{menu.title}</p>
                        {selected === menu.id && (
                            <span className='flex bg-secondary top-1 bottom-1 rounded-[20px] w-0.5 absolute left-0.5'></span>
                        )}
                    </div>
                ))}
                <div className='w-full h-14 flex flex-col justify-center items-center relative'>
                    <Image src='/assets/icons/more.svg' width={24} height={24} alt={`More Icon`} />
                </div>
                <div className='w-full h-14 flex flex-col justify-center items-center relative'>
                    <Image src='/assets/icons/apps.svg' width={24} height={24} alt={`More Icon`} />
                    <p className='text-[10px] text-center text-primary'>{'Apps'}</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation