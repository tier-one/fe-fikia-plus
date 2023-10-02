'use client'
import InputField from '@/app/components/InputField'
import CheckBox from '@/app/components/CheckBox'
import { useState } from 'react'
import Link from 'next/link'
import Button from '@/app/components/Button'
import { signIn, useSession } from 'next-auth/react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/navigation'

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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          "Invalid email format"
        )
        .required("Your email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Your password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    }),

    onSubmit: async (values) => {
      setIsLoading(true);
      setError("");

      const results = await signIn("credentials", {
        email: values.email,

        password: values.password,

        redirect: false,

        callbackUrl: "/dashboard",
      });

      setIsLoading(false);
      

      if (results && !results.error) {
        router.push("/dashboard");
      } else {
        setError("Your Email or Password is wrong!");
      }
    },
  });
  
  return (
    <main className='min-h-3/4 md:w-[50%] lg:w-1/3 w-[90%] box-shadow py-4'>
      <div className='w-full h-1/4 text-center text-white'>
        <h1 className='text-4xl font-bold'>Welcome Back!</h1>
        <p className='font-light py-3'>Gain valuable insights into your collective funds with our user-friendly platform for fund managers.</p>
      </div>
      <div className='bg-white rounded-[24px] shadow-lg h-3/4 px-10 py-10'>
        {error && (
          <p className="flex text-[10px] justify-center text-center text-red-600 self-stretch px-8">
            {error}
          </p>
        )}
        <div className='py-3'>
          <InputField
            value={formik.values.email}
            placeholder="Enter your email here"
            required={false}
            type="text"
            name="email"
            className="text-xs"
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...inputFieldStylingProps}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="flex text-[10px] text-center text-red-600 self-stretch px-8">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div className='py-3'>
          <InputField
            value={formik.values.password}
            placeholder="Enter your password here"
            required={false}
            type="password"
            name="password"
            className="text-xs"
            label="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...inputFieldStylingProps}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="flex text-[10px] text-center text-red-600 self-stretch px-8">
              {formik.errors.password}
            </p>
          ) : null}
        </div>

        <div className='flex justify-between px-9'>
          <CheckBox />
          <Link href='/forgot-password' className='text-base underline'>Forgot Password?</Link>
        </div>
        <div className='flex flex-col space w-full px-8 py-3'>
          <Button 
            onClick={formik.handleSubmit}
            styling='bg-[#002674] text-white py-2 px-4 mt-2  rounded-lg ' 
            value='Log in' 
            isDisabled={false}
            isLoading={isLoading} 
          />
        </div>
      </div>
    </main>
  )
}
