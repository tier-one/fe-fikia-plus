import { FormikProps } from "formik";
import Image from 'next/image'
import React, { ChangeEvent } from 'react'
import InputField from './InputField'
import * as Yup from "yup";
import { formikFundInfoValidationSchema } from './FormikValidationSchema';

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

  type Props = {
    formik: FormikProps<{
        fundName: string;
        FundGoal: string;
        FundSymbol: string;
        fundType: string;
        fundLogo: string;
      }>;
  }

const FundInfo = ({ formik }: Props) => {

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      return alert("Please upload an image file");
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      formik.handleChange("fundLogo")(result);
    };
  }
  return (
    <div className='flex flex-col items-start gap-[16px] self-stretch'>
        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={formik.values.fundName}
                    placeholder='E.g Unguka fund'
                    required={false}
                    type='text'
                    name="fundName"
                    className='text-xs'
                    label='Fund Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {formik.touched.fundName && formik.errors.fundName ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.fundName}
                  </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={formik.values.FundGoal}
                    placeholder='E.g To achieve long-term capital'
                    required={false}
                    type='text'
                    name="FundGoal"
                    className='text-xs'
                    label='Fund goal'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {formik.touched.FundGoal && formik.errors.FundGoal ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.FundGoal}
                  </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={formik.values.FundSymbol}
                    placeholder='UGF'
                    required={false}
                    type='text'
                    name="FundSymbol"
                    className='text-xs'
                    label='Fund Symbol'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {formik.touched.FundSymbol && formik.errors.FundSymbol ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.FundSymbol}
                  </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={formik.values.fundType}
                    placeholder='Mutual Funds'
                    required={false}
                    type='text'
                    name="fundType"
                    className='text-xs'
                    label='Fund Type'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {formik.touched.fundType && formik.errors.fundType ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.fundType}
                  </p>
                ) : null}
            </div>
        </div>

        <div className="flex flex-col gap-[4px] items-start justify-start w-full min-h-[150px] relative">
            <h1 className="text-[#64748A] text-[15px] font-[500] leading-[28px]">
                Fund Logo
            </h1>

            <label
                htmlFor="file"
                className="flex justify-center items-center z-10 text-center w-full min-h-[150px] p-20 text-[#64748A] border-2 border-[#CAD4E0] border-dashed"
            >
                {!formik.values.fundLogo &&( 
                <span className="flex flex-col justify-center items-center gap-[5px]">
                    <p className="text-[#64748A] text-[14px] font-[400] leading-[28px]">Drag or click to upload</p>
                </span>)}
            </label>
            {formik.touched.fundLogo && formik.errors.fundLogo ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {formik.errors.fundLogo}
                </p>
            ) : null}
            <input
                id="fundLogo"
                type="file"
                name="fundLogo"
                accept="image/*"
                required={true}
                className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
                onChange={handleChangeImage}
                onBlur={formik.handleBlur}
            />
            {formik.values.fundLogo && (
                <Image
                    src={formik.values.fundLogo }
                    className="sm:p-10 object-contain z-20 h-full"
                    alt="document"
                    fill
                />
            )}
        </div>
    </div>
  )
}

export default FundInfo;
