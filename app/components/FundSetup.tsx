import React from 'react'
import InputField from './InputField'
import { FormikErrors, FormikProps, FormikTouched, FormikValues, useFormik } from 'formik'
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
        depositoryAccounts: {
            AccoutDepositoryBankName: string;
            AccountDepositoryAccountNumber: string;
            DespositoryAccountCurrency: string,
        }[];

        cashAccounts: {
            CashAccountBankName: string;
            CashAccountNumber: string;
            CashAccountCurrency: string,
        }[];

        CustodianBankName: string;
        CustodianParcentage: string;

        TrustBankName: string;
        TrustPercentage: string;
      }>;
  }

const FundSetup = ({ formik2 }: Props) => {

  const addDepositoryAccount = () => {
        const newAccount = {
            AccoutDepositoryBankName: '',
            AccountDepositoryAccountNumber: '',
            DepostoryAccountCurrency: '',
        };
        const depositoryAccounts = [...formik2.values.depositoryAccounts, newAccount];
        formik2.setFieldValue('depositoryAccounts', depositoryAccounts);
  };

  const addCashAccount = () => {
    const newAccount = {
        CashAccountBankName: '',
        CashAccountNumber: '',
        cashAccountCurrency: '',
    };
    const cashAccounts = [...formik2.values.cashAccounts, newAccount];
    formik2.setFieldValue('cashAccounts', cashAccounts);
  };

  const getErrorMessage = (index: number, fieldName: 'AccoutDepositoryBankName' | 'AccountDepositoryAccountNumber' | 'DespositoryAccountCurrency') => {
    const errorsArray = formik2.errors.depositoryAccounts as FormikErrors<{ AccoutDepositoryBankName: string; AccountDepositoryAccountNumber: string; DespositoryAccountCurrency: string; }>[];
    const touchedArray = formik2.touched.depositoryAccounts as FormikTouched<{ AccoutDepositoryBankName: string; AccountDepositoryAccountNumber: string; DespositoryAccountCurrency: string; }>[];

    const error = errorsArray && errorsArray[index] ? errorsArray[index][fieldName] : undefined;
    const touched = touchedArray && touchedArray[index] ? touchedArray[index][fieldName] : undefined;

    return touched && error ? error : null;
  };

  const getErrorMessage2 = (index: number, fieldName: 'CashAccountBankName' | 'CashAccountNumber' | 'CashAccountCurrency') => {
    const errorsArray = formik2.errors.cashAccounts as FormikErrors<{ CashAccountBankName: string; CashAccountNumber: string; CashAccountCurrency: string; }>[];
    const touchedArray = formik2.touched.cashAccounts as FormikTouched<{ CashAccountBankName: string; CashAccountNumber: string; CashAccountCurrency: string; }>[];

    const error = errorsArray && errorsArray[index] ? errorsArray[index][fieldName] : undefined;
    const touched = touchedArray && touchedArray[index] ? touchedArray[index][fieldName] : undefined;

    return touched && error ? error : null;
  };

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

                {formik2.values.depositoryAccounts.map((account, index) => 
                    <div key={index} className='flex items-start gap-[16px] self-stretch'>
                        <div className="w-full h-[100px] flex flex-col justify-start items-center">
                            <InputField
                                value={account.AccoutDepositoryBankName}
                                placeholder='E.g Equity Bank'
                                required={false}
                                type='text'
                                name={`depositoryAccounts[${index}].AccoutDepositoryBankName`}
                                className='text-xs'
                                label='Bank Name'
                                onChange={formik2.handleChange}
                                onBlur={formik2.handleBlur}
                                {...inputFieldStylingProps}
                            />
                            {
                                getErrorMessage(index, 'AccoutDepositoryBankName') && (
                                    <p className="w-full text-[10px] text-red-600">
                                    {getErrorMessage(index, 'AccoutDepositoryBankName')}
                                    </p>
                                )
                            }
                        </div>

                        <div className="w-full h-[100px] flex flex-col justify-start items-center">
                            <InputField
                                value={account.AccountDepositoryAccountNumber}
                                placeholder='E.g 0045-7750-1877-603'
                                required={false}
                                type='text'
                                name={`depositoryAccounts[${index}].AccountDepositoryAccountNumber`}
                                className='text-xs'
                                label='Account Number'
                                onChange={formik2.handleChange}
                                onBlur={formik2.handleBlur}
                                {...inputFieldStylingProps}
                            />
                            {
                                getErrorMessage(index, 'AccountDepositoryAccountNumber') && (
                                    <p className="w-full text-[10px] text-red-600">
                                    {getErrorMessage(index, 'AccountDepositoryAccountNumber')}
                                    </p>
                                )
                            }
                        </div>

                        <div className="h-[100px] w-[100px] flex flex-col justify-start items-center">
                            <InputField
                                value={account.DespositoryAccountCurrency}
                                placeholder='E.g USD'
                                required={false}
                                type='text'
                                name={`depositoryAccounts[${index}].DespositoryAccountCurrency`}
                                className='text-xs'
                                label='Currency'
                                onChange={formik2.handleChange}
                                onBlur={formik2.handleBlur}
                                {...inputFieldStylingProps}
                            />
                            {
                                getErrorMessage(index, 'DespositoryAccountCurrency') && (
                                    <p className="w-full text-[10px] text-red-600">
                                        {getErrorMessage(index, 'DespositoryAccountCurrency')}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                )}

                <NewButton 
                    title='Add New' 
                    onClick={addDepositoryAccount}
                    buttonStyles='flex py-[12px] px-[16px] justify-center items-center gap-[8px] mt-2 rounded-[8px] border border-[#E5E9F0] bg-[#FFF]' 
                    textStyle='text-[#031F57] text-[14px] font-[500] leading-[16px] capitalize'
                />
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

                {formik2.values.cashAccounts.map((account, index) => 
                    <div key={index} className='flex items-start gap-[16px] self-stretch'>
                        <div className="w-full h-[100px] flex flex-col justify-start items-center">
                            <InputField
                                value={account.CashAccountBankName}
                                placeholder='E.g Equity Bank'
                                required={false}
                                type='text'
                                name={`cashAccounts[${index}].CashAccountBankName`}
                                className='text-xs'
                                label='Bank Name'
                                onChange={formik2.handleChange}
                                onBlur={formik2.handleBlur}
                                {...inputFieldStylingProps}
                            />
                            {
                                getErrorMessage2(index, 'CashAccountBankName') && (
                                    <p className="w-full text-[10px] text-red-600">
                                    {getErrorMessage2(index, 'CashAccountBankName')}
                                    </p>
                                )
                            }
                        </div>
                        
                        <div className="w-full h-[100px] flex flex-col justify-start items-center">
                            <InputField
                                value={account.CashAccountNumber}
                                placeholder='E.g 0045-7750-1877-603'
                                required={false}
                                type='text'
                                name={`cashAccounts[${index}].CashAccountNumber`}
                                className='text-xs'
                                label='Account Number'
                                onChange={formik2.handleChange}
                                onBlur={formik2.handleBlur}
                                {...inputFieldStylingProps}
                            />
                            {
                                getErrorMessage2(index, 'CashAccountNumber') && (
                                    <p className="w-full text-[10px] text-red-600">
                                    {getErrorMessage2(index, 'CashAccountNumber')}
                                    </p>
                                )
                            }
                        </div>

                        <div className="h-[100px] w-[100px] flex flex-col justify-start items-center">
                            <InputField
                                value={account.CashAccountCurrency}
                                placeholder='E.g USD'
                                required={false}
                                type='text'
                                name={`cashAccounts[${index}].CashAccountCurrency`}
                                className='text-xs'
                                label='Currency'
                                onChange={formik2.handleChange}
                                onBlur={formik2.handleBlur}
                                {...inputFieldStylingProps}
                            />
                            {
                                getErrorMessage2(index, 'CashAccountCurrency') && (
                                    <p className="w-full text-[10px] text-red-600">
                                        {getErrorMessage2(index, 'CashAccountCurrency')}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                )}

                <NewButton 
                    title='Add New' 
                    onClick={addCashAccount}
                    buttonStyles='flex py-[12px] px-[16px] justify-center items-center gap-[8px] mt-2 rounded-[8px] border border-[#E5E9F0] bg-[#FFF]' 
                    textStyle='text-[#031F57] text-[14px] font-[500] leading-[16px] capitalize'
                />
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