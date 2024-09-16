'use client'
import { appHeader } from '@/app/_constants'
import Image from 'next/image'
import React, { useState } from 'react'

const AppHeader = () => {
  const [selected] = useState(1);
  return (
    <header className='h-[60px] flex justify-between'>
      <div className='ml-5 flex items-center gap-1'>
        <div className='flex items-center'>
          <div className='w-8 h-8'>
            <Image quality={100} src={'/assets/images/app-logo.png'} width={32} height={32} alt='More Icon' />
          </div>
          <h1 className='font-bold text-lg leading-6 ml-3'>Van Arsdel</h1>
        </div>
        <div className='flex h-full items-center'>
          {appHeader.map(menu => (
            <div key={menu.id} className='px-2.5 relative h-full  flex items-center'>
              <p className={`${selected === menu.id ? 'text-dark font-semibold' : 'text-main'} text-sm leading-5`}>{menu.title}</p>
              {selected === menu.id && (
                <span className='flex absolute h-[3px] bg-secondary bottom-0 left-3 right-3 rounded-tl-full rounded-tr-full'></span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-end mr-5 items-center'>
        <div className='w-8 h-8 flex justify-center items-center'>
          <Image src={'/assets/icons/link.svg'} width={20} height={20} alt='More Icon' />
        </div>
        <div className='w-8 h-8 flex justify-center items-center'>
          <Image src={'/assets/icons/more-dark.svg'} width={20} height={20} alt='More Icon' />
        </div>
      </div>
    </header>
  )
}

export default AppHeader