import Button from '@/app/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      <div className='flex flex-col justify-center items-center gap-[10px] rounded-[24px] shadow-lg bg-white border border-[#EBEAEA] p-[50px]'>
        <div className='flex flex-col justify-center items-center gap-[15px]'>
            <div className='flex'>
              <h1 className='flex text-[23px] font-semibold capitalize text-center text-[#475569]'>Email confirmed successfully,<br/> continue with login</h1>
            </div>
            <div className='w-full'>
              <Link href={'/login'}><Button styling='bg-[#002674] text-white py-2 px-4 mt-2 w-full rounded-lg ' value='Continue to Log in' isDisabled={false} /></Link>
            </div>
        </div>
      </div>
  )
}

export default page