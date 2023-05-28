import React from 'react'
import Image from 'next/image'
import Bell from '../../public/notification-bell.svg'

export default function NotificationBell() {
  return (
    <div className='bg-[#031F57] py-3 px-5 rounded-full cursor-pointer'>
      {true ? <div className='absolute bg-sky-500 rounded-full w-5 h-5 -mt-5 ml-3 flex items-center justify-center'>3</div> : ''}
      <Image src={Bell} alt='notification bell' />
    </div>
  )
}
