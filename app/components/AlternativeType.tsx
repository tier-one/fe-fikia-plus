import { FormikProps } from 'formik';
import React from 'react'
import InputField from './InputField'

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
    alternativeFormik: FormikProps<{
        investmentFundName: string;
        investmentManager: string;
        fundStrategy: string;
    }>;
}

const AlternativeType = ({ alternativeFormik }: Props) => {
  return (
    <div className='flex flex-col items-start gap-[8px] self-stretch'>
        <div className='flex flex-col items-start gap-[2px]'>
            <h1 className='text-[#64748A] text-[14px] font-[700] leading-[20px]'>
                Alternative Investment Details
            </h1>

            <p className='text-[#6B7A99] text-[12px] font-[400] leading-normal'>
                Fill in the alternative investment details
            </p>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={alternativeFormik.values.investmentFundName}
                    placeholder='Investment FundName'
                    required={true}
                    type='text'
                    name="investmentFundName"
                    className='text-xs'
                    label='Investment FundName'
                    onChange={alternativeFormik.handleChange}
                    onBlur={alternativeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {alternativeFormik.touched.investmentFundName && alternativeFormik.errors.investmentFundName ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {alternativeFormik.errors.investmentFundName}
                    </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={alternativeFormik.values.investmentManager}
                    placeholder='Investment Manager'
                    required={true}
                    type='text'
                    name="investmentManager"
                    className='text-xs'
                    label='Investment Manager'
                    onChange={alternativeFormik.handleChange}
                    onBlur={alternativeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {alternativeFormik.touched.investmentManager && alternativeFormik.errors.investmentManager ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {alternativeFormik.errors.investmentManager}
                    </p>
                ) : null}
            </div>
        </div>

        <div className="w-full h-[100px] flex flex-col justify-start items-center">
            <InputField
                value={alternativeFormik.values.fundStrategy}
                placeholder='Fund Strategy'
                required={true}
                type='text'
                name="fundStrategy"
                className='text-xs'
                label='Fund Strategy'
                onChange={alternativeFormik.handleChange}
                onBlur={alternativeFormik.handleBlur}
                {...inputFieldStylingProps}
            />
            {alternativeFormik.touched.fundStrategy && alternativeFormik.errors.fundStrategy ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {alternativeFormik.errors.fundStrategy}
                </p>
            ) : null}
        </div>
    </div>
  )
}

export default AlternativeType