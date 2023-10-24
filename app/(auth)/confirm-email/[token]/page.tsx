'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/app/components/Button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import emailConfirm from '@/lib/actions/email_confirm/emailConfirm';

const ConfirmEmail = () => {
  const [error, setError] = useState<string | null>('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const urlParts = pathname.split('/');
  const token = urlParts[urlParts.length - 1];

  useEffect(() => {
    emailConfirm(token, setError, setLoading);
  }, [token])

  
  if (error) return (
    <div className='flex flex-col justify-center items-center gap-[10px] rounded-[24px] shadow-lg bg-white border border-[#EBEAEA] p-[50px]'>
      <h1 className='text-[40px] font-bold px-[50px]'>404</h1>
      <p>{error}</p>
    </div>
  )

  return (
    <div className='flex flex-col justify-center items-center gap-[10px] rounded-[24px] shadow-lg bg-white border border-[#EBEAEA] p-[50px]'>
      {loading ? (
        <div className='flex justify-center items-center gap-5 w-[270px] loading-container'>
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
          <div className='w-[100px] text-[20px]'>
            Loading<span className="loading-dots"></span>
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center gap-[15px]'>
            <div className='flex'>
              <h1 className='flex text-[23px] font-semibold capitalize text-center text-[#475569]'>Email confirmed successfully,<br/> continue with login</h1>
            </div>
            <div className='w-full'>
              <Link href={'/login'}><Button styling='bg-[#002674] text-white py-2 px-4 mt-2 w-full rounded-lg ' value='Continue to Log in' isDisabled={false}  /></Link>
            </div>
        </div>
      )}
      </div>
  )
}

export default ConfirmEmail;
