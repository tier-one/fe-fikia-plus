'use client'
import Image from 'next/image';
import Arrow from '../../../public/arrow.svg'
import Link from 'next/link';
import InputField from '@/app/components/InputField';
import { useState } from 'react';

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full py-7'
  },
  inputlabel: {
    className: 'text-base text-gray-600 font-light'
  },
  input: {
    className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600'
  },
}

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleEmail = (email: string) => {
    setEmail(email)
  }

  return (
    <main className='bg-white rounded-lg shadow-lg h-1/2 w-1/3 px-16'>
      <Link href='/auth/login' className='pt-12 flex'>
        <Image src={Arrow} alt='arrow' />
        <span className='text-[#002674] mx-1 text-sm'>Return back</span>
      </Link>
      <div className='py-5'>
        <h1 className='text-4xl font-bold text-[#475569]'>Forgot password?</h1>
        <p className='text-base py-3 text-[#475569]'>No worries, we&apos;ll send you reset instructions</p>
        <InputField
            value={email}
            placeholder='Enter your email here'
            required={false}
            type='text'
            className='text-xs'
            label='Email'
            onChange={handleEmail}
            {...inputFieldStylingProps}
          />
      </div>
    </main>
  )
}
