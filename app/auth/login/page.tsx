'use client'
import InputField from '@/app/components/InputField'
import CheckBox from '@/app/components/CheckBox'
import { useState } from 'react'
import Link from 'next/link'
import Button from '@/app/components/Button'
import { signIn, useSession } from 'next-auth/react'

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

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '', password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (fieldName: string, value: string) => {
    setLoginData((prevState) => ({
      ...prevState, [fieldName]: value
    }))
  }


  function isValidEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    return emailPattern.test(email);
  }

  function isValidPassword(password: string) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    return passwordPattern.test(password);
  }



  const handleSubmit = async (e: React.FormEvent) => {

    if (!loginData.email || !loginData.password) {
      setError("all field must be filled");

      setTimeout(() => {
        setError("");
      }, 3000)
    } else if (!isValidEmail(loginData.email)) {
      setError("please enter the valid email");

      setTimeout(() => {
        setError("");
      }, 3000)
    } else if (!isValidPassword(loginData.password)) {
      setError("valid password must contain one number, one symbol and letters(Lower & upper cases)");

      setTimeout(() => {
        setError("");
      }, 5000)
    } else {
      setIsLoading(true);

      const results = await signIn("credentials", {
        email: loginData.email,

        password: loginData.password,

        redirect: true,

        callbackUrl: "/dashboard"
      });

      setIsLoading(false)
    }
  }
  
  return (
    <main className='min-h-3/4 md:w-[50%] lg:w-1/3 w-[90%] box-shadow py-4'>
      <div className='w-full h-1/4 text-center text-white'>
        <h1 className='text-4xl font-bold'>Welcome Back!</h1>
        <p className='font-light py-3'>Gain valuable insights into your collective funds with our user-friendly platform for fund managers.</p>
      </div>
      <div className='bg-white rounded-[24px] shadow-lg h-3/4 px-10 py-10'>
        <div className='py-3'>
          <InputField
            value={loginData?.email}
            placeholder='Enter your email here'
            required={false}
            type='text'
            className='text-xs'
            label='Email'
            onChange={(value) => handleChange('email', value)}
            {...inputFieldStylingProps}
          />
        </div>
        <div className='py-3'>
          <InputField
            value={loginData?.password}
            placeholder='Enter your password here'
            required={false}
            type='password'
            className='text-xs'
            label='Password'
            onChange={(value) => handleChange('password', value)}
            {...inputFieldStylingProps}
          />
        </div>

        <div className='flex justify-between px-9'>
          <CheckBox />
          <Link href='/auth/forgot-password' className='text-base underline'>Forgot Password?</Link>
        </div>
        <div className='flex flex-col space w-full px-8 py-3'>
          <Button onClick={handleSubmit} styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' value='Log in' isLoading= {isLoading} />
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
