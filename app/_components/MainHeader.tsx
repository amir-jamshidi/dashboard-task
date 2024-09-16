import Image from 'next/image'
import React from 'react'

const MainHeader = () => {

    return (
        <div className='grid grid-cols-3 col-span-2 bg-neutral h-12 gap-4'>
            <div className='flex justify-between items-center'>
                <div className='w-6 h-12 flex justify-center items-center ml-[22px]'>
                    <Image src='assets/icons/Teams.svg' width={24} height={24} alt='Close Icon' />
                </div>

                <div className='flex'>
                    <button className='w-8 h-8 flex justify-center items-center'>
                        <Image src={'/assets/icons/ArrowLeft.svg'} width={6.5} height={12} alt='ArrowLeft' />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center'>
                        <Image src={'/assets/icons/ArrowRight.svg'} width={6.5} height={12} alt='ArrowRight' />
                    </button>
                </div>
            </div>


            <div className='flex justify-center items-center'>
                <div className='bg-white shadow-input rounded h-8 flex-1 px-2.5 flex items-center gap-2.5'>
                    <Image src={'/assets/icons/Search.svg'} width={20} height={20} alt='ArrowLeft' />
                    <input type="text" placeholder='Search' className='text-sm border-none outline-none w-full' />
                </div>
            </div>


            <div className='flex justify-end gap-2'>

                <div className='flex'>
                    <div className='w-12 h-12 flex justify-center items-center'>
                        <Image src='/assets/icons/Shape.svg' width={12.5} height={2.5} alt='Close Icon' />
                    </div>

                    <div className='w-12 h-12 flex justify-center items-center relative'>
                        <Image src='/assets/images/Avatar.png' width={32} height={32} alt='Close Icon' />
                        <Image src='/assets/icons/PresenceBadge.svg' className='absolute right-2 bottom-2' width={10} height={10} alt='Close Icon' />
                    </div>
                </div>

                <div className='flex'>
                    <div className='w-12 h-12 flex justify-center items-center'>
                        <Image src='assets/icons/ChromeMinimize.svg' width={10} height={1} alt='Close Icon' />
                    </div>
                    <div className='w-12 h-12 flex justify-center items-center'>
                        <Image src='assets/icons/ChromeMaximize.svg' width={10} height={10} alt='Close Icon' />
                    </div>
                    <div className='w-12 h-12 flex justify-center items-center'>
                        <Image src='assets/icons/Close.svg' width={10} height={10} alt='Close Icon' />
                    </div>
                </div>

            </div>
        </div>
    )

}

export default MainHeader