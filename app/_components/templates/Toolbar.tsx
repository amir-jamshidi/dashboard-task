import Image from 'next/image'
import React from 'react'

const Toolbar = () => {
  return (
    <div className='h-12 border flex justify-between'>
      <div className='ml-5 flex items-center'>
        <div className='w-8 h-8'>
          <Image src={'/assets/icons/menu.svg'} width={32} height={32} alt='Menu Icon' />
        </div>
      </div>
    </div>
  )
}

export default Toolbar