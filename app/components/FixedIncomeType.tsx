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
    fixedIncomeFormik: FormikProps<{
        bondType: string;
        issuer: string;
        faceValue: string;
        maturityDate: string;
        couponRate: string;
        paymentFrequency: string;
        yieldToMaturity: string;
        creditRating: string;
        fixedIncomeType: string;
        ISIN: string;
        fixedIncomeName: string;
        description: string;
        countryOfIssuer: string;
        effectiveDuration: string;
        amortizationSchedule: string;
        optionality: string;
        callablePuttable: string;
        currency: string;
        issueDate: string;
        listingExchange: string;
    }>;
}

const FixedIncomeType = ({ fixedIncomeFormik }: Props) => {
  return (
    <div className='flex flex-col items-start gap-[8px] self-stretch'>
        <div className='flex flex-col items-start gap-[2px]'>
            <h1 className='text-[#64748A] text-[14px] font-[700] leading-[20px]'>
                Fixed Income Details
            </h1>

            <p className='text-[#6B7A99] text-[12px] font-[400] leading-normal'>
                Fill in the income details
            </p>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.bondType}
                    placeholder='Bond Type'
                    required={true}
                    type='text'
                    name="bondType"
                    className='text-xs'
                    label='Bond Type'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.bondType && fixedIncomeFormik.errors.bondType ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.bondType}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.issuer}
                    placeholder='Bond issuer'
                    required={true}
                    type='text'
                    name="issuer"
                    className='text-xs'
                    label='Bond Issuer'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.issuer && fixedIncomeFormik.errors.issuer ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.issuer}
                        </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.faceValue}
                    placeholder='Face Value'
                    required={true}
                    type='number'
                    name="faceValue"
                    className='text-xs'
                    label='Face Value'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.faceValue && fixedIncomeFormik.errors.faceValue ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.faceValue}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.maturityDate}
                    placeholder='Maturity Date'
                    required={true}
                    type='date'
                    name="maturityDate"
                    className='text-xs'
                    label='Maturity Date'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.maturityDate && fixedIncomeFormik.errors.maturityDate ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.maturityDate}
                        </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.couponRate}
                    placeholder='Coupon Rate'
                    required={true}
                    type='number'
                    name="couponRate"
                    className='text-xs'
                    label='Coupon Rate'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.couponRate && fixedIncomeFormik.errors.couponRate ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.couponRate}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.paymentFrequency}
                    placeholder='Payment Frequency'
                    required={true}
                    type='text'
                    name="paymentFrequency"
                    className='text-xs'
                    label='Payment Frequency'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.paymentFrequency && fixedIncomeFormik.errors.paymentFrequency ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.paymentFrequency}
                        </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.yieldToMaturity}
                    placeholder='Yield To Maturity'
                    required={true}
                    type='number'
                    name="yieldToMaturity"
                    className='text-xs'
                    label='Yield To Maturity'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.yieldToMaturity && fixedIncomeFormik.errors.yieldToMaturity ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.yieldToMaturity}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.creditRating}
                    placeholder='Credit Rating'
                    required={true}
                    type='text'
                    name="creditRating"
                    className='text-xs'
                    label='Credit Rating'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.creditRating && fixedIncomeFormik.errors.creditRating ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.creditRating}
                        </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.fixedIncomeType}
                    placeholder='Fixed Income Type'
                    required={true}
                    type='text'
                    name="fixedIncomeType"
                    className='text-xs'
                    label='Fixed Income Type'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.fixedIncomeType && fixedIncomeFormik.errors.fixedIncomeType ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.fixedIncomeType}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.ISIN}
                    placeholder='ISIN'
                    required={true}
                    type='text'
                    name="ISIN"
                    className='text-xs'
                    label='ISIN'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.ISIN && fixedIncomeFormik.errors.ISIN ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.ISIN}
                        </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.fixedIncomeName}
                    placeholder='Fixed Income Name'
                    required={true}
                    type='text'
                    name="fixedIncomeName"
                    className='text-xs'
                    label='Fixed Income Name'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.fixedIncomeName && fixedIncomeFormik.errors.fixedIncomeName ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.fixedIncomeName}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.description}
                    placeholder='Description'
                    required={true}
                    type='string'
                    name="description"
                    className='text-xs'
                    label='Description'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.description && fixedIncomeFormik.errors.description ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.description}
                        </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.countryOfIssuer}
                    placeholder='Country Of Issuer'
                    required={true}
                    type='string'
                    name="countryOfIssuer"
                    className='text-xs'
                    label='Country Of Issuer'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.countryOfIssuer && fixedIncomeFormik.errors.countryOfIssuer ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.countryOfIssuer}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.effectiveDuration}
                    placeholder='Effective Duration'
                    required={true}
                    type='text'
                    name="effectiveDuration"
                    className='text-xs'
                    label='Effective Duration'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.effectiveDuration && fixedIncomeFormik.errors.effectiveDuration ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.effectiveDuration}
                        </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.amortizationSchedule}
                    placeholder='Amortization Schedule'
                    required={true}
                    type='string'
                    name="amortizationSchedule"
                    className='text-xs'
                    label='Amortization Schedule'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.amortizationSchedule && fixedIncomeFormik.errors.amortizationSchedule ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.amortizationSchedule}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.optionality}
                    placeholder='Optionality'
                    required={true}
                    type='text'
                    name="optionality"
                    className='text-xs'
                    label='Optionality'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.optionality && fixedIncomeFormik.errors.optionality ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.optionality}
                        </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.callablePuttable}
                    placeholder='Callable Puttable'
                    required={true}
                    type='string'
                    name="callablePuttable"
                    className='text-xs'
                    label='Callable Puttable'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.callablePuttable && fixedIncomeFormik.errors.callablePuttable ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.callablePuttable}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.currency}
                    placeholder='Currency'
                    required={true}
                    type='text'
                    name="currency"
                    className='text-xs'
                    label='Currency'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.currency && fixedIncomeFormik.errors.currency ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.currency}
                        </p>
                ) : null}
            </div>
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.issueDate}
                    placeholder='Issue Date'
                    required={true}
                    type='date'
                    name="issueDate"
                    className='text-xs'
                    label='Issue Date'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.issueDate && fixedIncomeFormik.errors.issueDate ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.issueDate}
                        </p>
                ) : null}
            </div>
            
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={fixedIncomeFormik.values.listingExchange}
                    placeholder='Listing Exchange'
                    required={true}
                    type='text'
                    name="listingExchange"
                    className='text-xs'
                    label='Listing Exchange'
                    onChange={fixedIncomeFormik.handleChange}
                    onBlur={fixedIncomeFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {fixedIncomeFormik.touched.listingExchange && fixedIncomeFormik.errors.listingExchange ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {fixedIncomeFormik.errors.listingExchange}
                        </p>
                ) : null}
            </div>
        </div>
    </div>
  )
}

export default FixedIncomeType