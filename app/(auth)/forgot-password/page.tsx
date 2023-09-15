'use client'
import Image from 'next/image';
import Arrow from '../../../public/arrow.svg'
import Link from 'next/link';
import InputField from '@/app/components/InputField';
import { useState } from 'react';
import Button from '@/app/components/Button';
import { useFormik } from "formik";
import * as Yup from "yup";
import forgotPassword from '@/lib/actions/forgot_password/forgotPassword';


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
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          "Invalid email format"
        )
        .required("Your email is required"),
    }),

    onSubmit: async (values) => {
      setIsLoading(true)

      await forgotPassword(values.email);

      setIsLoading(false);
    },
  });


  return (
    <main className='bg-white flex flex-col  justify-center  rounded-[24px] shadow-lg md:w-[50%] lg:w-1/3 w-[90%] px-16 py-10'>
      <Link href='/login' className='pt-5 flex cursor-pointer'>
        <Image src={Arrow} alt='arrow' className='transform rotate-90' />
        <span className='text-[#002674] mx-1 text-sm'>Return back</span>
      </Link>
      <div className='py-3'>
        <h1 className='text-4xl font-bold text-[#475569]'>Forgot password?</h1>
        <p className='text-base py-3 text-[#475569]'>No worries, we&apos;ll send you reset instructions</p>
        <InputField
            value={formik.values.email}
            placeholder='Enter your email here'
            required={false}
            type='text'
            name="email"
            className='text-xs'
            label='Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...inputFieldStylingProps}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="flex text-[10px] text-center text-red-600 self-stretch px-[2px]">
            {formik.errors.email}
          </p>
        ) : null}
        <div className='flex flex-col space w-full  py-3'>
          <Button 
            onClick={formik.handleSubmit}
            isLoading={isLoading}
            isDisabled={false}
            styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' 
            value='Receive instructions' 
          />
        </div>
      </div>
      
    </main>
  )
}
