import { ASSETS_TYPES, TRANSACTION_TYPES } from '@/constants'
import { FormikProps } from 'formik';
import React from 'react'
import InputField from './InputField'
import SelectInputField from './SelectInputField'

const inputFieldStylingProps = {
    container: {
      className: "flex flex-col space",
    },
    inputlabel: {
      className: "text-base text-gray-600 font-light",
    },
    input: {
      className:
        "py-3 px-5 rounded-lg mt-2 border border-gray-300 placeholder:text-gray-600",
    },
};

type Props = {
    formik: FormikProps<{
        transactionType: string;
        tradeDate: string;
        broker: string;
        typeOfInstrument: string
    }>;
    CLIENTS: any
}

const TransactionsInfo = ({ formik, CLIENTS }: Props) => {
  return (
    <div className='w-full'>
      <div className="w-full h-[100px] flex flex-col justify-start items-center">
        <InputField
          value={formik.values.tradeDate}
          placeholder="Date"
          required={true}
          type="date"
          name="tradeDate"
          className="text-xs w-full"
          label="Trade Date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          {...inputFieldStylingProps}
        />
        {formik.touched.tradeDate && formik.errors.tradeDate ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.tradeDate}
          </p>
        ) : null}
      </div>
      <div className="w-full h-[100px] flex flex-col justify-start items-center">
        <InputField
          value={formik.values.broker}
          placeholder="Enter a broker"
          required={true}
          type="text"
          name="broker"
          className="text-xs w-full"
          label="Broker"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          {...inputFieldStylingProps}
        />
        {formik.touched.broker && formik.errors.broker ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.broker}
          </p>
        ) : null}
      </div>
      <div className="py-3 w-full">
        <SelectInputField
          value={formik.values.transactionType}
          label="Transaction type"
          name="transactionType"
          required={true}
          options={TRANSACTION_TYPES}
          selectClass="w-full"
          placeholder="Choose a transaction type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> 
        {formik.touched.transactionType && formik.errors.transactionType ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.transactionType}
          </p>
        ) : null}
      </div>
      <div className="py-3 w-full">
        <SelectInputField
          value={formik.values.typeOfInstrument}
          label="Instrument type"
          name="typeOfInstrument"
          required={true}
          options={ASSETS_TYPES}
          selectClass="w-full"
          placeholder="Choose an instrument type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> 
         {formik.touched.typeOfInstrument && formik.errors.typeOfInstrument ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.typeOfInstrument}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default TransactionsInfo