'use client';
import Image from 'next/image';
import Waves from '../../public/waves.svg'
import Logo from '../../public/fikiaplus.svg'
import Link from 'next/link';
import NotificationBell from './NotificationBell';
import ProfileButton from './ProfileButton';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className='bg-[#00133B] h-[13vh]'>
      <div className="flex  text-white mx-20">
      <div className='w-1/2 flex justify-around'>
        <div className='w-1/3 flex '>
          <Image src={Logo} alt='Fikia Plus Logo' />
        </div>
        <div className='w-2/3 flex items-center justify-around'>
          <Link href='/dashboard' className={`py-4 w-1/3 text-center text-gray-300 font-bold ${pathname === '/dashboard' ? 'text-white text-white border-b-4 border-sky-500' : ''}`}>Dashboard</Link>
          <Link href='/dashboard/funds' className={`py-4 w-1/3 text-center text-gray-300 font-bold ${pathname === '/dashboard/funds' ? 'text-white text-white border-b-4 border-sky-500' : ''}`}>Funds</Link>
          <Link href='/dashboard/clients' className={`py-4 w-1/3 text-center text-gray-300 font-bold ${pathname === '/dashboard/clients' ? 'text-white text-white border-b-4 border-sky-500' : ''}`}>Clients</Link>
        </div>
      </div>
        <div className='static w-1/2 relative flex justify-end' >
        <div>
          <Image src={Waves} alt='waves' />
        </div>
        <div className='absolute h-full  w-1/3 flex justify-between items-center'>
          <NotificationBell />
          <ProfileButton />
        </div>
      </div>
    </div>
</div>
  )
}
