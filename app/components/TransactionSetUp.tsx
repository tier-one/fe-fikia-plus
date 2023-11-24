import { STATUS, TRANSACTION_TYPES } from '@/constants';
import { FormikProps } from 'formik';
import React from 'react'
import InputField from './InputField'
import SelectInputField from './SelectInputField';
import TextArea from './TextArea';

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
        instrument: string;
        numberOfShares: string;
        price: string;
        commission: string;
        status: string;
    }>;
}

const TransactionSetUp = ({ formik}: Props) => {
  return (
    <div>
      <div className="py-3 w-full">
        <InputField
          value={formik.values.instrument}
          placeholder="Enter instrument"
          required={true}
          type="text"
          name="instrument"
          className="text-xs"
          label="Instrument"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          {...inputFieldStylingProps}
        />
        {formik.touched.instrument && formik.errors.instrument ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.instrument}
          </p>
        ) : null}
      </div>
      <div className="py-3 w-full">
        <InputField
          value={formik.values.numberOfShares}
          placeholder="Number of shares"
          required={true}
          type="number"
          name="numberOfShares"
          className="text-xs"
          label="Number Of Shares"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          {...inputFieldStylingProps}
        />
        {formik.touched.numberOfShares && formik.errors.numberOfShares ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.numberOfShares}
          </p>
        ) : null}
      </div>
      <div className="py-3 w-full">
        <InputField
          value={formik.values.price}
          placeholder="Enter price"
          required={true}
          type="number"
          name="price"
          className="text-xs"
          label="Price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          {...inputFieldStylingProps}
        />
        {formik.touched.price && formik.errors.price ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.price}
          </p>
        ) : null}
      </div>
      <div className="py-3 w-full">
        <InputField
            value={formik.values.commission}
            placeholder="Enter commission"
            required={true}
            type="number"
            name="commission"
            className="text-xs"
            label="Commission"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...inputFieldStylingProps}
        />
        {formik.touched.commission && formik.errors.commission ? (
            <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.commission}
            </p>
        ) : null}
      </div>
      <div className="py-3 w-full">
        <SelectInputField
            value={formik.values.status}
            label="Status"
            name="status"
            required={true}
            options={STATUS}
            selectClass="w-full"
            placeholder="Choose a status"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.status && formik.errors.status ? (
          <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
            {formik.errors.status}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default TransactionSetUp