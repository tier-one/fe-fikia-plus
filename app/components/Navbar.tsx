'use client';
import { useState } from 'react';
import Image from 'next/image';
import Waves from '../../public/waves.svg'
import Logo from '../../public/fikiaplus.svg'
import Link from 'next/link';
import NotificationBell from './NotificationBell';
import ProfileButton from './ProfileButton';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function handleHamburgerBtn() {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className='bg-[#00133B] h-[13vh]'>
      <div className="flex  text-white lg:mx-20 h-full px-3">
        <div className='w-1/2 flex justify-around'>
          <div className='w-1/3 flex '>
            <Image src={Logo} alt='Fikia Plus Logo' />
          </div>
          <div className='w-2/3 hidden md:flex items-center justify-around'>
            <Link href='/dashboard' className={`py-4 w-1/3 text-center text-gray-300 font-bold ${pathname === '/dashboard' ? 'text-white border-b-4 border-sky-500' : ''}`}>Dashboard</Link>
            <Link href='/dashboard/funds' className={`py-4 w-1/3 text-center text-gray-300 font-bold ${pathname === '/dashboard/funds' ? 'text-white border-b-4 border-sky-500' : ''}`}>Funds</Link>
            <Link href='/dashboard/clients' className={`py-4 w-1/3 text-center text-gray-300 font-bold ${pathname === '/dashboard/clients' ? 'text-white border-b-4 border-sky-500' : ''}`}>Clients</Link>
          </div>
        </div>
        <div className='static w-1/2 relative flex justify-end' >
          <div>
            <Image src={Waves} alt='waves' />
          </div>
          <div className='absolute right-10 md:right-0 flex gap-[24px] items-center justify-center h-full'>
            <NotificationBell />
            <ProfileButton />
          </div>
        </div>
        <div className='md:hidden flex justify-center items-center'>
          <div onClick={handleHamburgerBtn}>
            <div className={`h-1 w-10 bg-[#fff] ${hamburgerOpen ? 'absolute rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
            <div className={`h-1 w-10 bg-[#fff] mt-2 ${hamburgerOpen ? 'hidden' : ''}`}></div>
            <div className={`h-1 w-10 bg-[#fff] mt-2 ${hamburgerOpen ? '-mt-[0.2rem] -rotate-45 transition duration-150 ease-in-out' : 'transition duration-150 ease-in-out'}`}></div>
          </div>
        </div>
      </div>
      {hamburgerOpen && (
        <div className='w-full md:hidden flex flex-col items-start justify-around absolute bg-[#d1cfcf] border border-white'>
              <Link href='/dashboard' className={`py-4 w-full text-start px-[30px] text-[20px] text-black font-bold ${pathname === '/dashboard' ? 'text-[#5a5a5a] border-r-4 border-sky-500' : ''}`}>Dashboard</Link>
              <Link href='/dashboard/funds' className={`py-4 w-full text-start px-[30px] text-[20px] text-black font-bold ${pathname === '/dashboard/funds' ? 'text-[#5a5a5a] border-r-4 border-sky-500' : ''}`}>Funds</Link>
              <Link href='/dashboard/clients' className={`py-4 w-full text-start px-[30px] text-[20px] text-black font-bold ${pathname === '/dashboard/clients' ? 'text-[#5a5a5a] border-r-4 border-sky-500' : ''}`}>Clients</Link>
        </div>
      )}
    </div>
  )
}
