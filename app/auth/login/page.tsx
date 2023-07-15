'use client'
import InputField from '@/app/components/InputField'
import CheckBox from '@/app/components/CheckBox'
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@/app/components/Button'
import { redirect } from 'next/navigation';

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full px-8'
  },
  inputlabel: {
    className: 'text-base text-gray-600 font-light'
  },
  input: {
    className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600'
  },
}

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      
      setProviders(res);
    }

    fetchProviders();
  }, []);

  const handleEmail = (email: string) => {
    setEmail(email)
  }

  const {data: Session} = useSession();
  
  if(Session?.user) redirect('/dashboard');

  return (
    <main className='min-h-3/4 w-1/3 box-shadow py-4'>
      <div className='w-full h-1/4 text-center text-white'>
        <h1 className='text-4xl font-bold'>Welcome Back!</h1>
        <p className='font-light py-3'>Gain valuable insights into your collective funds with our user-friendly platform for fund managers.</p>
      </div>
      <div className='bg-white rounded-[24px] shadow-lg h-3/4 px-10 py-10'>
        <div className='py-3'>
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
        <div className='py-3'>
          <InputField
            value={password}
            placeholder='Enter your password here'
            required={false}
            type='text'
            className='text-xs'
            label='Password'
            onChange={handleEmail}
            {...inputFieldStylingProps}
          />
        </div>

        <div className='flex justify-between px-9'>
          <CheckBox />
          <Link href='/auth/forgot-password' className='text-base underline'>Forgot Password?</Link>
        </div>
        <div className='flex flex-col space w-full px-8 py-3'>
          <Button styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Log in' />
          {providers && (
            <>
              {Object.values(providers).map((provider: Provider, i) => (
                <Button 
                  key={i} 
                  styling='bg-[#ffff] border border-gray-300 text-gray-500 py-2 px-4 mt-2  rounded-lg ' 
                  value={`Signin with ${provider?.name}`}
                  onClick={() => signIn(provider?.id)}
                  icon='/flat-color-icons_google.svg'
                />
              ))}
            </>
          )}
        </div>

      </div>
    </main>
  )
}
