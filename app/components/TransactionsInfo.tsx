import { TRANSACTION_TYPES } from '@/constants'
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
        investorFullNames: string;
        amount: string;
    }>;
    CLIENTS: any
}

const TransactionsInfo = ({ formik, CLIENTS }: Props) => {
  return (
    <div>
      <div className="w-full h-[100px] flex flex-col justify-start items-center">
        <SelectInputField
            value={formik.values.transactionType}
            label="Transaction type"
            name="transactionType"
            required={true}
            options={TRANSACTION_TYPES}
            selectClass="w-full"
            placeholder="Choose a type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.transactionType && formik.errors.transactionType ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.transactionType}
          </p>
        ) : null}
      </div>
      <div className="w-full h-[100px] flex flex-col justify-start items-center">
        <SelectInputField
            value={formik.values.investorFullNames}
            label="Client Name"
            name="investorFullNames"
            required={true}
            options={CLIENTS}
            selectClass="w-full"
            placeholder="Choose a client"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.investorFullNames && formik.errors.investorFullNames ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.investorFullNames}
          </p>
        ) : null}
      </div>
      <div className="py-3 w-full">
        <InputField
          value={formik.values.amount}
          placeholder="Enter amount"
          required={true}
          type="number"
          name="amount"
          className="text-xs"
          label="Amount"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          {...inputFieldStylingProps}
        />
        {formik.touched.amount && formik.errors.amount ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.amount}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default TransactionsInfo