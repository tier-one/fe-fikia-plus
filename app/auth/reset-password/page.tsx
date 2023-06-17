'use client'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../../../public/arrow.svg'
import InputField from '@/app/components/InputField'
import { useState } from 'react'
import Button from '@/app/components/Button' 
const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full'
  },
  inputlabel: {
    className: 'text-base text-gray-600 font-light'
  },
  input: {
    className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600'
  },
}

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  
  return (
    <main className='bg-white rounded-[24px] shadow-lg min-h-1/2 w-1/3 px-16 py-4'>
      <Link href='/auth/login' className='pt-8 flex'>
        <Image src={Arrow} alt='arrow' />
        <span className='text-[#002674] mx-1 text-sm'>Return back</span>
      </Link>
      <div className='py-5'>
        <h1 className='text-4xl font-bold text-[#475569]'>Change password</h1>
        <p className='text-base py-3 text-[#475569]'>Enter your new password and confirm it.</p>
        <div className='py-2'>
          <InputField
              value={password}
              placeholder='Enter your new password here'
              required={false}
              type='text'
              className='text-xs'
              label='New Password'
              onChange={setPassword}
              {...inputFieldStylingProps}
            />
        </div>
        <div className='py-3'>
          <InputField
            value={password}
            placeholder='Confirm your new password here'
            required={false}
            type='text'
            className='text-xs'
            label='Confirm Password'
            onChange={setPassword}
            {...inputFieldStylingProps}
          />
        </div>
        <div className='flex flex-col space w-full  py-3'>
          <Button styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Change password' />
        </div>
      </div>
    </main>
  )
}
