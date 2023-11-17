import React from 'react';
import InputField from './InputField';
import NewButton from './NewButton';
import { FormikProps, useFormik } from 'formik';

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
    formik2: FormikProps<{
        tickerSymbol: string;
        companyName: string;
        numberOfOutstandingShares: string;
        ISIN: string;
        description: string;
        currency: string;
        exchange: string;
        sectorIndustry: string;
        assetClass: string;
        countryOfDomicile: string;

        bondType: string;
        issuer: string;
        faceValue: string;
        maturityDate: string;
        couponRate: string;
        paymentFrequency: string;
        yieldToMaturity: string;
        creditRating: string;
        fixedIncomeType: string;
        ISIN2: string;
        fixedIncomeName: string;
        description2: string;
        countryOfIssuer: string;
        effectiveDuration: string;
        amortizationSchedule: string;
        optionality: string;
        callablePuttable: string;
        currency2: string;
        issueDate: string;
        listingExchange: string;

        propertyAddress: string;
        propertyType: string;
        rentalIncome: string;

        investmentFundName: string;
        investmentManager: string;
        fundStrategy: string;
    }>;
}

const AssetSetup = ({ formik2 }: Props) => {
  return (
    <div className='flex flex-col items-start gap-[24px] self-stretch'>
        <div className='flex flex-col items-start gap-[24px] self-stretch'>
            <div className='flex flex-col items-start gap-[8px] self-stretch'>
                <div className='flex flex-col items-start gap-[2px]'>
                    <h1 className='text-[#64748A] text-[14px] font-[700] leading-[20px]'>
                        Equity Details
                    </h1>

                    <p className='text-[#6B7A99] text-[12px] font-[400] leading-normal'>
                        Fill in the equity details
                    </p>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.tickerSymbol}
                            placeholder='Ticker Symbol'
                            required={true}
                            type='text'
                            name="tickerSymbol"
                            className='text-xs'
                            label='Ticker Symbol'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.tickerSymbol && formik2.errors.tickerSymbol ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.tickerSymbol}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.companyName}
                            placeholder='Company Name'
                            required={true}
                            type='text'
                            name="companyName"
                            className='text-xs'
                            label='Company Name'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.companyName && formik2.errors.companyName ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.companyName}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="flex items-start gap-[16px] self-stretch">
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.numberOfOutstandingShares}
                            placeholder='Number Of Outstanding Shares'
                            required={true}
                            type='number'
                            name="numberOfOutstandingShares"
                            className='text-xs'
                            label='Number Of Outstanding Shares'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.numberOfOutstandingShares && formik2.errors.numberOfOutstandingShares ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.numberOfOutstandingShares}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.ISIN}
                            placeholder='ISIN'
                            required={true}
                            type='text'
                            name="ISIN"
                            className='text-xs'
                            label='ISIN'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.ISIN && formik2.errors.ISIN ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.ISIN}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="flex items-start gap-[16px] self-stretch">
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.description}
                            placeholder='description'
                            required={true}
                            type='text'
                            name="description"
                            className='text-xs'
                            label='description'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.description && formik2.errors.description ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.description}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.currency}
                            placeholder='currency'
                            required={true}
                            type='text'
                            name="currency"
                            className='text-xs'
                            label='currency'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.currency && formik2.errors.currency ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.currency}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="flex items-start gap-[16px] self-stretch">
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.exchange}
                            placeholder='exchange'
                            required={true}
                            type='text'
                            name="exchange"
                            className='text-xs'
                            label='exchange'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.exchange && formik2.errors.exchange ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.exchange}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.sectorIndustry}
                            placeholder='Sector Industry'
                            required={true}
                            type='text'
                            name="sectorIndustry"
                            className='text-xs'
                            label='sectorIndustry'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.sectorIndustry && formik2.errors.sectorIndustry ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.sectorIndustry}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="flex items-start gap-[16px] self-stretch">
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.assetClass}
                            placeholder='Asset Class'
                            required={true}
                            type='text'
                            name="assetClass"
                            className='text-xs'
                            label='Asset Class'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.assetClass && formik2.errors.assetClass ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.assetClass}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.countryOfDomicile}
                            placeholder='Country Of Domicile'
                            required={true}
                            type='text'
                            name="countryOfDomicile"
                            className='text-xs'
                            label='Country Of Domicile'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.countryOfDomicile && formik2.errors.countryOfDomicile ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.countryOfDomicile}
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className='h-[1px] w-full self-stretch bg-[#E5E9F0]'></div>

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
                            value={formik2.values.bondType}
                            placeholder='Bond Type'
                            required={true}
                            type='text'
                            name="bondType"
                            className='text-xs'
                            label='Bond Type'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.bondType && formik2.errors.bondType ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.bondType}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.issuer}
                            placeholder='Bond issuer'
                            required={true}
                            type='text'
                            name="issuer"
                            className='text-xs'
                            label='Bond Issuer'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.issuer && formik2.errors.issuer ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.issuer}
                                </p>
                        ) : null}
                    </div>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.faceValue}
                            placeholder='Face Value'
                            required={true}
                            type='number'
                            name="faceValue"
                            className='text-xs'
                            label='Face Value'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.faceValue && formik2.errors.faceValue ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.faceValue}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.maturityDate}
                            placeholder='Maturity Date'
                            required={true}
                            type='date'
                            name="maturityDate"
                            className='text-xs'
                            label='Maturity Date'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.maturityDate && formik2.errors.maturityDate ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.maturityDate}
                                </p>
                        ) : null}
                    </div>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.couponRate}
                            placeholder='Coupon Rate'
                            required={true}
                            type='number'
                            name="couponRate"
                            className='text-xs'
                            label='Coupon Rate'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.couponRate && formik2.errors.couponRate ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.couponRate}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.paymentFrequency}
                            placeholder='Payment Frequency'
                            required={true}
                            type='text'
                            name="paymentFrequency"
                            className='text-xs'
                            label='Payment Frequency'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.paymentFrequency && formik2.errors.paymentFrequency ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.paymentFrequency}
                                </p>
                        ) : null}
                    </div>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.yieldToMaturity}
                            placeholder='Yield To Maturity'
                            required={true}
                            type='number'
                            name="yieldToMaturity"
                            className='text-xs'
                            label='Yield To Maturity'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.yieldToMaturity && formik2.errors.yieldToMaturity ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.yieldToMaturity}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.creditRating}
                            placeholder='Credit Rating'
                            required={true}
                            type='text'
                            name="creditRating"
                            className='text-xs'
                            label='Credit Rating'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.creditRating && formik2.errors.creditRating ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.creditRating}
                                </p>
                        ) : null}
                    </div>
                </div>

                {/*************************** */}

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.fixedIncomeType}
                            placeholder='Fixed Income Type'
                            required={true}
                            type='text'
                            name="fixedIncomeType"
                            className='text-xs'
                            label='Fixed Income Type'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.fixedIncomeType && formik2.errors.fixedIncomeType ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.fixedIncomeType}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.ISIN2}
                            placeholder='ISIN'
                            required={true}
                            type='text'
                            name="ISIN2"
                            className='text-xs'
                            label='ISIN'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.ISIN2 && formik2.errors.ISIN2 ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.ISIN2}
                                </p>
                        ) : null}
                    </div>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.fixedIncomeName}
                            placeholder='Fixed Income Name'
                            required={true}
                            type='text'
                            name="fixedIncomeName"
                            className='text-xs'
                            label='Fixed Income Name'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.fixedIncomeName && formik2.errors.fixedIncomeName ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.fixedIncomeName}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.description2}
                            placeholder='Description'
                            required={true}
                            type='string'
                            name="description2"
                            className='text-xs'
                            label='Description'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.description2 && formik2.errors.description2 ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.description2}
                                </p>
                        ) : null}
                    </div>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.countryOfIssuer}
                            placeholder='Country Of Issuer'
                            required={true}
                            type='string'
                            name="countryOfIssuer"
                            className='text-xs'
                            label='Country Of Issuer'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.countryOfIssuer && formik2.errors.countryOfIssuer ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.countryOfIssuer}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.effectiveDuration}
                            placeholder='Effective Duration'
                            required={true}
                            type='text'
                            name="effectiveDuration"
                            className='text-xs'
                            label='Effective Duration'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.effectiveDuration && formik2.errors.effectiveDuration ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.effectiveDuration}
                                </p>
                        ) : null}
                    </div>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.amortizationSchedule}
                            placeholder='Amortization Schedule'
                            required={true}
                            type='string'
                            name="amortizationSchedule"
                            className='text-xs'
                            label='Amortization Schedule'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.amortizationSchedule && formik2.errors.amortizationSchedule ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.amortizationSchedule}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.optionality}
                            placeholder='Optionality'
                            required={true}
                            type='text'
                            name="optionality"
                            className='text-xs'
                            label='Optionality'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.optionality && formik2.errors.optionality ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.optionality}
                                </p>
                        ) : null}
                    </div>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.callablePuttable}
                            placeholder='Callable Puttable'
                            required={true}
                            type='string'
                            name="callablePuttable"
                            className='text-xs'
                            label='Callable Puttable'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.callablePuttable && formik2.errors.callablePuttable ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.callablePuttable}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.currency2}
                            placeholder='Currency'
                            required={true}
                            type='text'
                            name="currency2"
                            className='text-xs'
                            label='Currency'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.currency2 && formik2.errors.currency2 ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.currency2}
                                </p>
                        ) : null}
                    </div>
                </div>

                <div className='flex items-start gap-[16px] self-stretch'>
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.issueDate}
                            placeholder='Issue Date'
                            required={true}
                            type='date'
                            name="issueDate"
                            className='text-xs'
                            label='Issue Date'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.issueDate && formik2.errors.issueDate ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.issueDate}
                                </p>
                        ) : null}
                    </div>
                    
                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.listingExchange}
                            placeholder='Listing Exchange'
                            required={true}
                            type='text'
                            name="listingExchange"
                            className='text-xs'
                            label='Listing Exchange'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.listingExchange && formik2.errors.listingExchange ? (
                                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                    {formik2.errors.listingExchange}
                                </p>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className='h-[1px] w-full self-stretch bg-[#E5E9F0]'></div>

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
                            value={formik2.values.propertyAddress}
                            placeholder='Property Address'
                            required={true}
                            type='text'
                            name="propertyAddress"
                            className='text-xs'
                            label='Property Address'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.propertyAddress && formik2.errors.propertyAddress ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.propertyAddress}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.propertyType}
                            placeholder='Property Type'
                            required={true}
                            type='text'
                            name="propertyType"
                            className='text-xs'
                            label='Property Type'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.propertyType && formik2.errors.propertyType ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.propertyType}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                    <InputField
                        value={formik2.values.rentalIncome}
                        placeholder='Rental Income'
                        required={true}
                        type='number'
                        name="rentalIncome"
                        className='text-xs'
                        label='Rental Income'
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}
                        {...inputFieldStylingProps}
                    />
                    {formik2.touched.rentalIncome && formik2.errors.rentalIncome ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {formik2.errors.rentalIncome}
                        </p>
                    ) : null}
                </div>
            </div>

            <div className='h-[1px] w-full self-stretch bg-[#E5E9F0]'></div>

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
                            value={formik2.values.investmentFundName}
                            placeholder='Investment FundName'
                            required={true}
                            type='text'
                            name="investmentFundName"
                            className='text-xs'
                            label='Investment FundName'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.investmentFundName && formik2.errors.investmentFundName ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.investmentFundName}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full h-[100px] flex flex-col justify-start items-center">
                        <InputField
                            value={formik2.values.investmentManager}
                            placeholder='Investment Manager'
                            required={true}
                            type='text'
                            name="investmentManager"
                            className='text-xs'
                            label='Investment Manager'
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}
                            {...inputFieldStylingProps}
                        />
                        {formik2.touched.investmentManager && formik2.errors.investmentManager ? (
                            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                                {formik2.errors.investmentManager}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="w-full h-[100px] flex flex-col justify-start items-center">
                    <InputField
                        value={formik2.values.fundStrategy}
                        placeholder='Fund Strategy'
                        required={true}
                        type='text'
                        name="fundStrategy"
                        className='text-xs'
                        label='Fund Strategy'
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}
                        {...inputFieldStylingProps}
                    />
                    {formik2.touched.fundStrategy && formik2.errors.fundStrategy ? (
                        <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                            {formik2.errors.fundStrategy}
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AssetSetup