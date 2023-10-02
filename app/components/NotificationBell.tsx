import React from 'react'
import Image from 'next/image'
import Bell from '../../public/notification-bell.svg'
import { notifications } from '@/constants';
import { useRouter } from 'next/navigation';

export default function NotificationBell() {
  const router = useRouter();
  const filteredNotifications = notifications.filter(notification => !notification.isRead);

  const handleClick = () => {
    router.push('/notifications')
  }

  return (
    <div onClick={handleClick} className='bg-[#031F57] py-2 px-4 rounded-full cursor-pointer'>
      {true ? <div className='absolute bg-sky-500 rounded-full w-5 h-5 -mt-5 ml-3 flex items-center justify-center'>{filteredNotifications.length}</div> : ''}
      <Image src={Bell} alt='notification bell' />
    </div>
  )
}
