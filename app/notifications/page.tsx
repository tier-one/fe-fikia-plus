'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { notifications } from '@/constants';


const options = [
  {
    id: -1,
    value: 'All'
  },
  {
    id: 1,
    value: 'Unread'
  },
]

const NotificationPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

const filteredNotifications = selectedIndex === 1
? notifications.filter(notification => !notification.isRead)
: notifications;

  return (
    <div className='flex bg-[#eaeaed] min-h-[88vh] justify-center items-start p-[10px]'>
        <div className='flex flex-col items-start bg-[#FFFFFF] h-auto w-[681px] rounded-[8px] py-[13px] px-[0px]'>
          <div className='flex flex-col items-start w-full gap-[16px] self-stretch'>
            <div className='flex py-[8px] px-[16px] justify-center items-center gap-[8px]'>
              <h1 className='text-[#475569] text-[24px] font-[600] leading-normal'>Notifications</h1>
            </div>

            <div className='flex flex-col items-center gap-[16px] self-stretch'>
              <div className='flex py-0 px-[16px] items-center gap-[16px] self-stretch'>
                <div className='flex items-center gap-[8px]'>
                  {options.map((option) => (
                    <div onClick={() => handleClick(option?.id)} key={option.id} className={`flex py-[4px] px-[16px] flex-col justify-center items-center gap-[8px] rounded-[16px] ${selectedIndex === option.id && 'bg-[#00B7FE19]'} cursor-pointer`}>
                      <h1 className={`${selectedIndex === option.id ? 'text-[#00B7FE]' : 'text-[#64748A]'} text-[14px] font-[500] leading-normal`}>
                        {option.value}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col items-center self-stretch pb-[100px]'>
                {filteredNotifications.map((notification) => (
                  <div key={notification.id} className='flex pt-[8px] px-[16px] pb-[16px] justify-between items-start self-stretch border-b border-b-[#E5E9F0]'>
                    <div className='flex flex-col items-start gap-[8px]'>
                      <h1 className='text-[#64748A] text-[14px] font-[500] leading-normal'>
                        {notification.value}
                      </h1>

                      <p className='text-[#6366F0] text-[14px] font-[400] leading-normal underline'>
                        View details
                      </p>

                      <p className='text-[#475569] text-[12px] font-[500] leading-normal'>
                        {notification.date}
                      </p>
                    </div>

                    <div className='cursor-pointer'>
                      <Image 
                        src='/close.svg'
                        width={16}
                        height={16}
                        alt='dashboard icon'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NotificationPage;
