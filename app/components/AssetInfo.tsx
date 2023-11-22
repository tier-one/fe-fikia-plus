import { ASSETS_TYPES } from "@/constants";
import { FormikProps } from "formik";
import Image from 'next/image'
import React, { ChangeEvent } from 'react'
import InputField from './InputField'
import SelectBox from "./SelectBox";
import SelectInputField from "./SelectInputField";
import TextArea from "./TextArea";

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
    formik: FormikProps<{
        name: string;
        price: string;
        value: string;
        note: string;
        type: string
    }>;
  }

const AssetInfo = ({ formik }: Props) => {
  return (
    <div className='flex flex-col items-start gap-[16px] self-stretch'>
        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={formik.values.name}
                    placeholder='Enter asset Name'
                    required={true}
                    type='text'
                    name="name"
                    className='text-xs'
                    label='Asset name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.name}
                  </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={formik.values.price}
                    placeholder='Enter Asset Price'
                    required={true}
                    type='number'
                    name="price"
                    className='text-xs'
                    label='Asset price'
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
        </div>

        <div className='flex items-start gap-[16px] self-stretch'>
            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <InputField
                    value={formik.values.value}
                    placeholder='Enter value'
                    required={true}
                    type='number'
                    name="value"
                    className='text-xs'
                    label='Asset value'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                />
                {formik.touched.value && formik.errors.value ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.value}
                  </p>
                ) : null}
            </div>

            <div className="w-full h-[100px] flex flex-col justify-start items-center">
                <SelectInputField
                    value={formik.values.type}
                    label="Asset type"
                    name="type"
                    required
                    options={ASSETS_TYPES}
                    selectClass="w-full"
                    placeholder="Choose a type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.type && formik.errors.type ? (
                  <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                    {formik.errors.type}
                  </p>
                ) : null}
            </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
            <TextArea
                value={formik.values.note}
                placeholder='Type asset notes'
                required={true}
                name="note"
                className='text-xs'
                label='Notes'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...inputFieldStylingProps}
            />
            {formik.touched.note && formik.errors.note ? (
                <p className="flex px-[3px] text-[10px] text-center text-red-600 self-stretch">
                {formik.errors.note}
                </p>
            ) : null}
        </div>
    </div>
  )
}

export default AssetInfo