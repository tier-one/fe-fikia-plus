import React from 'react'
import InputField from './InputField'
import { FormikProps, useFormik } from 'formik'
import * as Yup from "yup";
import Button from './Button';
import NewButton from './NewButton';
import { formikFundSetUpValidationSchema } from './FormikValidationSchema';

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
    formik2: FormikProps<{
        AccoutDepositoryBankName: string;
        AccountDepositoryAccountNumber: string;

        CashAccountBankName: string;
        CashAccountNumber: string;

        CustodianBankName: string;
        CustodianParcentage: string;

        TrustBankName: string;
        TrustPercentage: string;
      }>;
  }

const FundSetup = ({ formik2 }: Props) => {
  return (
    <div className='flex flex-col items-start gap-[24px] self-stretch'>
        <div className='flex flex-col items-start gap-[24px] self-stretch'>
            <div className='flex flex-col items-start gap-[8px] self-stretch'>
                <div className='flex flex-col items-start gap-[2px]'>
                    <h1 className='text-[#64748A] text-[14px] font-[700] leading-[20px]'>
                        Account depository informations
                    </h1>

                    <p className='text-[#6B7A99] text-[12px] font-[400] leading-normal'>
                        Fill in the account numbers of the depository account
                    </p>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.AccoutDepositoryBankName}
                            placeholder='E.g Equity Bank'
                            required={false}
                            type='text'
                            name="AccoutDepositoryBankName"
                            className='text-xs'
                            label='Bank Name'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.AccoutDepositoryBankName && formik2.errors.AccoutDepositoryBankName ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.AccoutDepositoryBankName}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.AccountDepositoryAccountNumber}
                            placeholder='E.g 0045-7750-1877-603'
                            required={false}
                            type='text'
                            name="AccountDepositoryAccountNumber"
                            className='text-xs'
                            label='Account Number'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.AccountDepositoryAccountNumber && formik2.errors.AccountDepositoryAccountNumber ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.AccountDepositoryAccountNumber}
                            </p>
                        ) : null}
                    </div>
                </div>

                {/* <NewButton 
                    title='Add New' 
                    onClick={formik2.handleSubmit}
                    buttonStyles='flex py-[12px] px-[16px] justify-center items-center gap-[8px] mt-2 rounded-[8px] border border-[#E5E9F0] bg-[#FFF]' 
                    textStyle='text-[#031F57] text-[14px] font-[500] leading-[16px] capitalize'
                /> */}
            </div>

            <div className='h-[1px] w-full self-stretch bg-[#E5E9F0]'></div>

            <div className='flex flex-col items-start gap-[8px] self-stretch'>
                <div className='flex flex-col items-start gap-[2px]'>
                    <h1 className='text-[#64748A] text-[14px] font-[700] leading-[20px]'>
                        Cash accounts informations
                    </h1>

                    <p className='text-[#6B7A99] text-[12px] font-[400] leading-normal'>
                        Fill in the account numbers of the depository account
                    </p>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.CashAccountBankName}
                            placeholder='E.g Equity Bank'
                            required={false}
                            type='text'
                            name="CashAccountBankName"
                            className='text-xs'
                            label='Bank Name'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.CashAccountBankName && formik2.errors.CashAccountBankName ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.CashAccountBankName}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.CashAccountNumber}
                            placeholder='E.g 0045-7750-1877-603'
                            required={false}
                            type='text'
                            name="CashAccountNumber"
                            className='text-xs'
                            label='Account Number'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.CashAccountNumber && formik2.errors.CashAccountNumber ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.CashAccountNumber}
                                </p>
                        ) : null}
                    </div>
                </div>

                {/* <NewButton 
                    title='Add New' 
                    onClick={formik2.handleSubmit}
                    buttonStyles='flex py-[12px] px-[16px] justify-center items-center gap-[8px] mt-2 rounded-[8px] border border-[#E5E9F0] bg-[#FFF]' 
                    textStyle='text-[#031F57] text-[14px] font-[500] leading-[16px] capitalize'
                /> */}
            </div>

            <div className='h-[1px] w-full self-stretch bg-[#E5E9F0]'></div>

            <div className='flex flex-col items-start gap-[8px] self-stretch'>
                <div className='flex flex-col items-start gap-[2px]'>
                    <h1 className='text-[#64748A] text-[14px] font-[700] leading-[20px]'>
                        Custodian informations
                    </h1>

                    <p className='text-[#6B7A99] text-[12px] font-[400] leading-normal'>
                        Fill in the account numbers of the depository account
                    </p>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.CustodianBankName}
                            placeholder='E.g Equity Bank'
                            required={false}
                            type='text'
                            name="CustodianBankName"
                            className='text-xs'
                            label='Bank Name'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.CustodianBankName && formik2.errors.CustodianBankName ? (
                                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                        {formik2.errors.CustodianBankName}
                                    </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.CustodianParcentage}
                            placeholder='10'
                            required={false}
                            type='text'
                            name="CustodianParcentage"
                            className='text-xs'
                            label='Percentage'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.CustodianParcentage && formik2.errors.CustodianParcentage ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.CustodianParcentage}
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className='h-[1px] w-full self-stretch bg-[#E5E9F0]'></div>

            <div className='flex flex-col items-start gap-[8px] self-stretch'>
                <div className='flex flex-col items-start gap-[2px]'>
                    <h1 className='text-[#64748A] text-[14px] font-[700] leading-[20px]'>
                        Trustee informations
                    </h1>

                    <p className='text-[#6B7A99] text-[12px] font-[400] leading-normal'>
                        Fill in the account numbers of the depository account
                    </p>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.TrustBankName}
                            placeholder='E.g Equity Bank'
                            required={false}
                            type='text'
                            name="TrustBankName"
                            className='text-xs'
                            label='Bank Name'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.TrustBankName && formik2.errors.TrustBankName ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.TrustBankName}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.TrustPercentage}
                            placeholder='10'
                            required={false}
                            type='text'
                            name="TrustPercentage"
                            className='text-xs'
                            label='Percentage'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.TrustPercentage && formik2.errors.TrustPercentage ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.TrustPercentage}
                            </p>
                        ) : null}
                    </div>
                </div>

                {/* <NewButton 
                    title='Add New' 
                    onClick={formik2.handleSubmit}
                    buttonStyles='flex py-[12px] px-[16px] justify-center items-center gap-[8px] mt-2 rounded-[8px] border border-[#E5E9F0] bg-[#FFF]' 
                    textStyle='text-[#031F57] text-[14px] font-[500] leading-[16px] capitalize'
                /> */}
            </div>
        </div>
    </div>
  )
}

export default FundSetup