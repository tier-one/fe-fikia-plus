'use client';

import { useFormik } from 'formik';
import React from 'react'
import InputField from './InputField'
import * as Yup from "yup";
import NewButton from './NewButton';
import Image from 'next/image';

const inputFieldStylingProps = {
    container: {
      className: 'flex flex-col space max-w-[230px] w-[230px] py-2'
    },
    inputlabel: {
      className: 'text-base text-gray-600 font-light'
    },
    input: {
      className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600'
    },
}

const AssetsTopbar = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            image: "",
        },
    
        validationSchema: Yup.object({
            email: Yup.string()
            .email("Invalid email format")
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                "Invalid email format"
            )
            .required("Your email is required"),
            image: Yup.string()
                .required("Your ID copy is required"),
        }),
    
        onSubmit: async (values) => {
            console.log(values);
        },
    });
  return (
    <div className='flex w-full px-[16px] justify-between items-start self-stretch'>
        <InputField
            value={formik.values.email}
            placeholder='Search asset'
            required={false}
            type='text'
            name="email"
            className='text-xs'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...inputFieldStylingProps}
        />

        <div className='flex items-start gap-[40px]'>
            <div className='flex items-start gap-[16px]'>
                <div className='flex py-[12px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] border border-[#E5E9F0]'>
                    <Image 
                        src='/view_column.svg'
                        width={20}
                        height={20}
                        alt='view_column'
                    />

                    <h1 className='text-[#4B5563] text-[14px] font-[500] leading-[16px] capitalize'>Columns</h1>
                </div>

                <div className='flex py-[12px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] border border-[#E5E9F0]'>
                    <Image 
                        src='/filter_list.svg'
                        width={20}
                        height={20}
                        alt='filter_list'
                    />

                    <h1 className='text-[#4B5563] text-[14px] font-[500] leading-[16px] capitalize'>Filters</h1>
                </div>

                <div className='flex py-[12px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] border border-[#E5E9F0]'>
                    <Image 
                        src='/file_upload (1).svg'
                        width={20}
                        height={20}
                        alt='filter_list'
                    />

                    <h1 className='text-[#4B5563] text-[14px] font-[500] leading-[16px] capitalize'>Export</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AssetsTopbar