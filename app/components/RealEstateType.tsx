import { FormikProps } from 'formik';
import React from 'react';
import InputField from './InputField';

const inputFieldStylingProps = {
    container: {
      className: 'flex flex-col space w-full py-2'
    },
    inputlabel: {
      className: 'text-base text-gray-600 font-light'
    },
    input: {
      className: 'py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-300'
    },
}

type Props = {
    realEstateFormik: FormikProps<{
        propertyAddress: string;
        propertyType: string;
        rentalIncome: string;
    }>;
}

const RealEstateType = ({ realEstateFormik }: Props) => {
  return (
    <div className='flex flex-col items-start gap-[8px] self-stretch'>
        <div className='flex flex-col items-start gap-[2px]'>
            <h1 className='text-[#64748A] text-[14px] font-[700] leading-[20px]'>
                RealEstate Details
            </h1>

            <p className='text-[#6B7A99] text-[12px] font-[400] leading-normal'>
                Fill in real estate details
            </p>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={realEstateFormik.values.propertyAddress}
                    placeholder='Property Address'
                    required={true}
                    type='text'
                    name="propertyAddress"
                    className='text-xs'
                    label='Property Address'
                    onChange={realEstateFormik.handleChange}
                    onBlur={realEstateFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {realEstateFormik.touched.propertyAddress && realEstateFormik.errors.propertyAddress ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {realEstateFormik.errors.propertyAddress}
                    </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={realEstateFormik.values.propertyType}
                    placeholder='Property Type'
                    required={true}
                    type='text'
                    name="propertyType"
                    className='text-xs'
                    label='Property Type'
                    onChange={realEstateFormik.handleChange}
                    onBlur={realEstateFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {realEstateFormik.touched.propertyType && realEstateFormik.errors.propertyType ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {realEstateFormik.errors.propertyType}
                    </p>
                ) : null}
            </div>
        </div>

        <div className="w-full h-[100px] flex flex-col justify-start items-center">
            <InputField
                value={realEstateFormik.values.rentalIncome}
                placeholder='Rental Income'
                required={true}
                type='number'
                name="rentalIncome"
                className='text-xs'
                label='Rental Income'
                onChange={realEstateFormik.handleChange}
                onBlur={realEstateFormik.handleBlur}
                {...inputFieldStylingProps}
            />
            {realEstateFormik.touched.rentalIncome && realEstateFormik.errors.rentalIncome ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {realEstateFormik.errors.rentalIncome}
                </p>
            ) : null}
        </div>
    </div>
  )
}

export default RealEstateType