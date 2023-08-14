'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Arrow from '../../../../public/arrow.svg'
import InputField from '@/app/components/InputField'
import { useState } from 'react'
import Button from '@/app/components/Button' 
import resetPassword from '@/lib/actions/reset_password/resetPassword';

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
  const router = useRouter();
  const pathname = usePathname();
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [confimPassword, setConfimPassword] = useState('');

  const urlParts = pathname.split('/');
  const token = urlParts[urlParts.length - 1];


  function isValidPassword(password: string) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    return passwordPattern.test(password);
  }


  const handleSubmit = async () => {

    if (!password || !confimPassword) {
      setError('all field must be filled');

      setTimeout(() => {
        setError('');
      }, 3000);
    } else if (!isValidPassword(password)) {
      setError('valid password must contain one number, one symbol and letters(Lower & upper cases)');

      setTimeout(() => {
        setError('');
      }, 4000)
    } else if (password !== confimPassword) {
      setError('password must be equal to confirm password');

      setTimeout(() => {
        setError('');
      }, 3000);
      
    } else {
      setIsLoading(true);

      const results = await resetPassword(password, token, router);
      

      setIsLoading(false);

      setPassword('');
      setConfimPassword('');
    }
    
  }
  
  return (
    <main className='bg-white rounded-[24px] shadow-lg min-h-1/2 md:w-[50%] lg:w-1/3 w-[90%] px-16 py-4'>
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
              type='password'
              className='text-xs'
              label='New Password'
              onChange={setPassword}
              {...inputFieldStylingProps}
            />
        </div>
        <div className='py-3'>
          <InputField
            value={confimPassword}
            placeholder='Confirm your new password here'
            required={false}
            type='password'
            className='text-xs'
            label='Confirm Password'
            onChange={setConfimPassword}
            {...inputFieldStylingProps}
          />
        </div>
        <div className='flex flex-col space w-full  py-3'>
          <Button onClick={handleSubmit} isLoading={isLoading} styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Change password' />
        </div>
        {error && (
          <div className='bg-red-400 px-[20px] py-[5px] rounded-md flex items-center justify-center text-white w-auto'>
            <h1>{error}</h1>
          </div>
        )}
      </div>
    </main>
  )
}
