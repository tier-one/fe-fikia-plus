'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import InputField from '../components/InputField';
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from 'next/image';
import FundInfo from '../components/FundInfo';
import FundSetup from '../components/FundSetup';
import NewButton from '../components/NewButton';
import { formikFundInfoValidationSchema, formikFundSetUpValidationSchema } from '../components/FormikValidationSchema';
import { useSession } from 'next-auth/react';
import { createFund } from '@/lib/actions/create_fund/createFund';
import Button from '../components/Button';
import { useSearchParams } from 'next/navigation';
import fetchFundById from '@/lib/actions/get-fundBy-Id/fetchFundById';
import { UpdateFunds } from '@/lib/actions/update_fund/updateFund';

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

type Fund = {
  id: string;
  FundName: string;
  FundGoal: string;
  FundSymbol: string;
  FundType: string;
  FundLogo: string;
  AccoutDepositoryBankName: string;
  AccountDepositoryAccountNumber: string;
  CashAccountBankName: string;
  CashAccountNumber: string;
  CustodianBankName: string;
  CustodianParcentage: string;
  TrustBankName: string;
  TrustPercentage: string
  };

const CreateFund = () => {
  const {data: session} = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [infoValues, setInfoValues] = useState({});
  const [clickedEvent, setClickedEvent] = useState(1);
  const [updateFunds, setUpdateFunds] = useState<Fund>();
  const [isUpdate, setIsUpdate] = useState(false);
  const [fundIdToUpdate, setFundIdToUpdate] = useState<string>();
  const searchParams = useSearchParams();

  const managerId = session?.user?.id;
  const token = session?.user?.token;

  const fundId = searchParams?.get('id');

  const getSingleFund = async () => {
    const results = await fetchFundById(token, fundId);

    setUpdateFunds(results.fund.fund)
  }

  useEffect(() => {
    if (fundId && token !== undefined) {
      getSingleFund()
    }
  }, [fundId, token]);


  let fundValues = {}

  const formik = useFormik({
    initialValues: {
        fundName: "",
        FundGoal: "",
        FundSymbol: "",
        fundType: "",
        fundLogo: "",
    },

    validationSchema: formikFundInfoValidationSchema,

    onSubmit: async (values) => {
        setInfoValues(values);
        handleContinue();
    },
  });

  useEffect(() => {
    if (updateFunds) {
      formik.setValues({
        ...formik.values,
        fundName: updateFunds.FundName,
        FundGoal: updateFunds.FundGoal,
        FundSymbol: updateFunds.FundSymbol,
        fundType: updateFunds.FundType,
        // fundLogo: updateFunds.FundLogo
      });
      setIsUpdate(true);
      setFundIdToUpdate(updateFunds.id)
    }
  }, [updateFunds]);

  useEffect(() => {
    if (updateFunds) {
      formik2.setValues({
        ...formik2.values,
        // AccoutDepositoryBankName: updateFunds.AccoutDepositoryBankName,
        // AccountDepositoryAccountNumber: updateFunds.AccountDepositoryAccountNumber,
        // CashAccountBankName: updateFunds.CashAccountBankName,
        // CashAccountNumber: updateFunds.CashAccountNumber,
        CustodianBankName: updateFunds.CustodianBankName,
        CustodianParcentage: updateFunds.CustodianParcentage,
        TrustBankName: updateFunds.TrustBankName,
        TrustPercentage: updateFunds.TrustPercentage,
      });
    }
  }, [updateFunds])


  const formik2 = useFormik({
    initialValues: {
        depositoryAccounts: [
          {
            AccoutDepositoryBankName: "",
            AccountDepositoryAccountNumber: "",
            DespositoryAccountCurrency: "",
          }
        ],

        cashAccounts: [
          {
            CashAccountBankName: "",
            CashAccountNumber: "",
            CashAccountCurrency: "",
          }
        ],

        CustodianBankName: "",
        CustodianParcentage: "",

        TrustBankName: "",
        TrustPercentage: "",
    },

    validationSchema: formikFundSetUpValidationSchema,

    onSubmit: async (values) => {
      setIsLoading(true);

      fundValues = {
        ...infoValues,
        ...values
      }
      
      if (!isUpdate) {
        const results = await createFund(fundValues, managerId, token);
      }

      if (isUpdate) {
        const res = await UpdateFunds(fundValues, fundIdToUpdate, token)
      }


      setIsLoading(false);
      
      // values.AccoutDepositoryBankName=""
      // values.AccountDepositoryAccountNumber=""
      // values.CashAccountBankName=""
      // values.CashAccountNumber=""
      // values.CustodianBankName=""
      // values.CustodianParcentage=""
      // values.TrustBankName=""
      // values.TrustPercentage=""
      
    },
  });

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      return alert("Please upload an image file");
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      formik.handleChange("image")(result);
    };
  }

  const handleContinue = () => {
    setClickedEvent(-1)
  }
  return (
    <div className='w-full h-auto bg-[#eaeaed] p-[40px]'>
        <div className='flex flex-col items-start gap-[24px] w-full'>
            <div className='flex justify-between items-start self-stretch'>
                <h1 className='text-[#475569] text-[32px] font-[500] leading-normal'>{isUpdate ? 'Update fund' : 'Create fund'}</h1>

                <div className='flex items-center gap-[12px]'>
                    <NewButton 
                        title='Cancel' 
                        onClick={() => {}}
                        buttonStyles='flex py-[12px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] border border-[#E5E9F0] bg-[#FFF]' 
                        textStyle='text-[#6B7280] text-[14px] font-[500] leading-[16px]'
                    />

                    <Button 
                        value={clickedEvent === 1 ? 'Continue': clickedEvent !== 1 && !isUpdate ? 'Save fund': 'Update fund'}
                        onClick={clickedEvent === 1 ? formik.handleSubmit : formik2.handleSubmit}
                        styling='flex py-[12px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] border border-[#031F57] bg-[#031F57] text-[#FFF] text-[14px] font-[500] leading-[16px]'
                        isLoading={isLoading}
                    />
                </div>
            </div>

            <div className='flex flex-col items-start gap-[8px] rounded-[8px] border border-[#E5E9F0] bg-[#FFF] w-full px-[100px] pt-[24px] pb-[40px]'>
                <div className='flex flex-col items-start gap-[40px] self-stretch'>
                    <div className='flex items-start justify-between self-stretch'>
                        <div className='flex flex-col items-center gap-[16px]'>
                            <div className='w-[30px] h-[30px] rounded-[50%] border-[2px] border-[#000] flex justify-center items-center'>1</div>

                            <div className='flex flex-col items-center gap-[2px]'>
                                <h1 className='text-[#6B7280] text-[14px] font-[700] leading-[16px]'>
                                    Fund information
                                </h1>

                                <p className='text-[#6B7280] text-[12px] font-[400] leading-[16px]'>
                                    What is the details of the fund
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-[16px]'>
                            <div className='w-[30px] h-[30px] rounded-[50%] border-[2px] border-[#000] flex justify-center items-center'>2</div>

                            <div className='flex flex-col items-center gap-[2px]'>
                                <h1 className='text-[#6B7280] text-[14px] font-[700] leading-[16px]'>
                                    Fund setup
                                </h1>

                                <p className='text-[#6B7280] text-[12px] font-[400] leading-[16px]'>
                                    Provide fund configurations
                                </p>
                            </div>
                        </div>
                    </div>

                    {clickedEvent === 1 && <FundInfo formik={formik} />}

                    {clickedEvent === -1 && <FundSetup formik2={formik2} />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateFund;