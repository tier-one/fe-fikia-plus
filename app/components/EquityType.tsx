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
    equityFormik: FormikProps<{
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
    }>;
}

const EquityType = ({ equityFormik }: Props) => {
  return (
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
                    value={equityFormik.values.tickerSymbol}
                    placeholder='Ticker Symbol'
                    required={true}
                    type='text'
                    name="tickerSymbol"
                    className='text-xs'
                    label='Ticker Symbol'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.tickerSymbol && equityFormik.errors.tickerSymbol ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.tickerSymbol}
                    </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={equityFormik.values.companyName}
                    placeholder='Company Name'
                    required={true}
                    type='text'
                    name="companyName"
                    className='text-xs'
                    label='Company Name'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.companyName && equityFormik.errors.companyName ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.companyName}
                    </p>
                ) : null}
            </div>
        </div>

        <div className="flex items-start gap-[16px] self-stretch">
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={equityFormik.values.numberOfOutstandingShares}
                    placeholder='Number Of Outstanding Shares'
                    required={true}
                    type='number'
                    name="numberOfOutstandingShares"
                    className='text-xs'
                    label='Number Of Outstanding Shares'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.numberOfOutstandingShares && equityFormik.errors.numberOfOutstandingShares ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.numberOfOutstandingShares}
                    </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={equityFormik.values.ISIN}
                    placeholder='ISIN'
                    required={true}
                    type='text'
                    name="ISIN"
                    className='text-xs'
                    label='ISIN'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.ISIN && equityFormik.errors.ISIN ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.ISIN}
                    </p>
                ) : null}
            </div>
        </div>

        <div className="flex items-start gap-[16px] self-stretch">
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={equityFormik.values.description}
                    placeholder='description'
                    required={true}
                    type='text'
                    name="description"
                    className='text-xs'
                    label='description'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.description && equityFormik.errors.description ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.description}
                    </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={equityFormik.values.currency}
                    placeholder='currency'
                    required={true}
                    type='text'
                    name="currency"
                    className='text-xs'
                    label='currency'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.currency && equityFormik.errors.currency ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.currency}
                    </p>
                ) : null}
            </div>
        </div>

        <div className="flex items-start gap-[16px] self-stretch">
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={equityFormik.values.exchange}
                    placeholder='exchange'
                    required={true}
                    type='text'
                    name="exchange"
                    className='text-xs'
                    label='exchange'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.exchange && equityFormik.errors.exchange ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.exchange}
                    </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={equityFormik.values.sectorIndustry}
                    placeholder='Sector Industry'
                    required={true}
                    type='text'
                    name="sectorIndustry"
                    className='text-xs'
                    label='sectorIndustry'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.sectorIndustry && equityFormik.errors.sectorIndustry ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.sectorIndustry}
                    </p>
                ) : null}
            </div>
        </div>

        <div className="flex items-start gap-[16px] self-stretch">
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={equityFormik.values.assetClass}
                    placeholder='Asset Class'
                    required={true}
                    type='text'
                    name="assetClass"
                    className='text-xs'
                    label='Asset Class'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.assetClass && equityFormik.errors.assetClass ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.assetClass}
                    </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={equityFormik.values.countryOfDomicile}
                    placeholder='Country Of Domicile'
                    required={true}
                    type='text'
                    name="countryOfDomicile"
                    className='text-xs'
                    label='Country Of Domicile'
                    onChange={equityFormik.handleChange}
                    onBlur={equityFormik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {equityFormik.touched.countryOfDomicile && equityFormik.errors.countryOfDomicile ? (
                    <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                        {equityFormik.errors.countryOfDomicile}
                    </p>
                ) : null}
            </div>
        </div>
    </div>
  )
}

export default EquityType