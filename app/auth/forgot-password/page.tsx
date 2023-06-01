'use client'
import Image from 'next/image';
import Arrow from '../../../public/arrow.svg'
import Link from 'next/link';
import InputField from '@/app/components/InputField';
import { useState } from 'react';
import Button from '@/app/components/Button';

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full py-2'
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
    <main className='bg-white flex flex-col  justify-center  rounded-xl shadow-lg min-h-[70vh] w-1/3 px-16 py-4'>
      <Link href='/auth/login' className='pt-5 flex'>
        <Image src={Arrow} alt='arrow' />
        <span className='text-[#002674] mx-1 text-sm'>Return back</span>
      </Link>
      <div className='py-3'>
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
        <div className='flex flex-col space w-full  py-3'>
          <Button styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Receive instructions' />
        </div>
      </div>
      
    </main>
  )
}
