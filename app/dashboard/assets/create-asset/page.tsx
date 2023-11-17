'use client';

import AssetInfo from '@/app/components/AssetInfo';
import AssetSetup from '@/app/components/AssetSetup';
import Button from '@/app/components/Button';
import { formikAssetInfoValidationSchema, formikAssetSetUpValidationSchema, formikFundInfoValidationSchema, formikFundSetUpValidationSchema } from '@/app/components/FormikValidationSchema';
import FundInfo from '@/app/components/FundInfo';
import FundSetup from '@/app/components/FundSetup';
import NewButton from '@/app/components/NewButton';
import { createAsset } from '@/lib/actions/create-asset/createAsset';
import { createFund } from '@/lib/actions/create_fund/createFund';
import fetchFundById from '@/lib/actions/get-fundBy-Id/fetchFundById';
import fetchAssetById from '@/lib/actions/get_assetby_Id/fetchAssetById';
import { UpdateAsset } from '@/lib/actions/update_asset/updateAsset';
import { UpdateFunds } from '@/lib/actions/update_fund/updateFund';
import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

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

const CreateAsset = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [infoValues, setInfoValues] = useState({});
    const [clickedEvent, setClickedEvent] = useState(1);
    const [updateFunds, setUpdateFunds] = useState<Fund>();
    const [updateAsset, setUpdateAsset] = useState<any>();
    const [isUpdate, setIsUpdate] = useState(false);
    const [fundIdToUpdate, setFundIdToUpdate] = useState<string>();
    const [assetIdToUpdate, setAssetIdToUpdate] = useState<string>();
    const searchParams = useSearchParams();

    const token = session?.user?.token;
  
    const assetId = searchParams?.get('id');
  
    const getSingleAsset = async () => {
      const results = await fetchAssetById(token, assetId);
      console.log(results, 'This is the single asset')
  
      setUpdateAsset(results)
    }
  
    useEffect(() => {
      if (assetId && token !== undefined) {
        getSingleAsset()
      }
    }, [assetId, token]);
  
  
    let assetValues = {}
  
    const formik = useFormik({
      initialValues: {
          name: "",
          price: "",
          value: "",
          note: "",
      },
  
      validationSchema: formikAssetInfoValidationSchema,
  
      onSubmit: async (values) => {
          setInfoValues(values);
          handleContinue();
      },
    });
  
  
    const formik2 = useFormik({
      initialValues: {
          tickerSymbol: "",
          companyName: "",
          numberOfOutstandingShares: "",
          ISIN: "",
          description: "",
          currency: "",
          exchange: "",
          sectorIndustry: "",
          assetClass: "",
          countryOfDomicile: "",

          bondType: "",
          issuer: "",
          faceValue: "",
          maturityDate: "",
          couponRate: "",
          paymentFrequency: "",
          yieldToMaturity: "",
          creditRating: "",
          fixedIncomeType: "",
          ISIN2: "",
          fixedIncomeName: "",
          description2: "",
          countryOfIssuer: "",
          effectiveDuration: "",
          amortizationSchedule: "",
          optionality: "",
          callablePuttable: "",
          currency2: "",
          issueDate: "",
          listingExchange: "",

          propertyAddress: "",
          propertyType: "",
          rentalIncome: "",

          investmentFundName: "",
          investmentManager: "",
          fundStrategy: "",
      },
  
      validationSchema: formikAssetSetUpValidationSchema,
  
      onSubmit: async (values) => {
        setIsLoading(true);
  
        assetValues = {
          ...infoValues,
          ...values
        }
  
        if (!isUpdate) {
            console.log('IS CREATING ASSET')
            const results = await createAsset(assetValues, token);
        }
  
        if (isUpdate) {
            console.log('IS UPDATING ASSET')
            const res = await UpdateAsset(assetValues, assetId, token)
        }

        handleResetFormik();

        router.push(`dashboard/assets`)
  
  
        setIsLoading(false);
        
      },
    });
  
    const handleContinue = () => {
      setClickedEvent(-1)
    }

    const handleResetFormik = () => {
        formik.resetForm();
        formik2.resetForm()
    }

    useEffect(() => {
        if (updateAsset) {
          formik.setValues({
            ...formik.values,
            name: updateAsset?.name,
            price: updateAsset?.price,
            value: updateAsset?.value,
            note: updateAsset?.note
          });
          setIsUpdate(true);
          setAssetIdToUpdate(updateAsset.id)
        }
    }, [updateAsset]);

    useEffect(() => {
        if (updateAsset) {
          formik2.setValues({
            ...formik2.values,
            tickerSymbol: updateAsset?.equityDetails?.tickerSymbol,
            companyName: updateAsset?.equityDetails?.companyName,
            numberOfOutstandingShares: updateAsset?.equityDetails?.numberOfOutstandingShares,
            ISIN: updateAsset?.equityDetails?.ISIN,
            description: updateAsset?.equityDetails?.description,
            currency: updateAsset?.equityDetails?.currency,
            exchange: updateAsset?.equityDetails?.exchange,
            sectorIndustry: updateAsset?.equityDetails?.sectorIndustry,
            assetClass: updateAsset?.equityDetails?.assetClass,
            countryOfDomicile: updateAsset?.equityDetails?.countryOfDomicile,

            bondType: updateAsset?.fixedIncomeDetails?.bondType,
            issuer: updateAsset?.fixedIncomeDetails?.issuer,
            faceValue: updateAsset?.fixedIncomeDetails?.faceValue,
            maturityDate: updateAsset?.fixedIncomeDetails?.maturityDate,
            couponRate: updateAsset?.fixedIncomeDetails?.couponRate,
            paymentFrequency: updateAsset?.fixedIncomeDetails?.paymentFrequency,
            yieldToMaturity: updateAsset?.fixedIncomeDetails?.yieldToMaturity,
            creditRating: updateAsset?.fixedIncomeDetails?.creditRating,
            fixedIncomeType: updateAsset?.fixedIncomeDetails?.fixedIncomeType,
            ISIN2: updateAsset?.fixedIncomeDetails?.ISIN,
            fixedIncomeName: updateAsset?.fixedIncomeDetails?.fixedIncomeName,
            description2: updateAsset?.fixedIncomeDetails?.description,
            countryOfIssuer: updateAsset?.fixedIncomeDetails?.countryOfIssuer,
            effectiveDuration: updateAsset?.fixedIncomeDetails?.effectiveDuration,
            amortizationSchedule: updateAsset?.fixedIncomeDetails?.amortizationSchedule,
            optionality: updateAsset?.fixedIncomeDetails?.optionality,
            callablePuttable: updateAsset?.fixedIncomeDetails?.callablePuttable,
            currency2: updateAsset?.fixedIncomeDetails?.currency,
            issueDate: updateAsset?.fixedIncomeDetails?.issueDate,
            listingExchange: updateAsset?.fixedIncomeDetails?.listingExchange,

            propertyAddress: updateAsset?.realEstateDetails?.propertyAddress,
            propertyType: updateAsset?.realEstateDetails?.propertyType,
            rentalIncome: updateAsset?.realEstateDetails?.rentalIncome,

            investmentFundName: updateAsset?.alternativeInvestmentDetails?.investmentFundName,
            investmentManager: updateAsset?.alternativeInvestmentDetails?.investmentManager,
            fundStrategy: updateAsset?.alternativeInvestmentDetails?.fundStrategy,
          });
        }
    }, [updateAsset])

  return (
    <div className='w-full min-h-[87vh] h-auto bg-[#eaeaed] p-[40px]'>
        <div className='flex flex-col items-start gap-[24px] w-full'>
            <div className='flex justify-between items-start self-stretch'>
                <h1 className='text-[#475569] text-[32px] font-[500] leading-normal'>{isUpdate ? 'Update asset' : 'Create asset'}</h1>

                <div className='flex items-center gap-[12px]'>
                    <NewButton 
                        title='Cancel'
                        onClick={() => {}}
                        buttonStyles='flex py-[12px] px-[16px] justify-center items-center gap-[8px] rounded-[8px] border border-[#E5E9F0] bg-[#FFF]'
                        textStyle='text-[#6B7280] text-[14px] font-[500] leading-[16px]'
                    />

                    <Button 
                        value={clickedEvent === 1 ? 'Continue': clickedEvent !== 1 && !isUpdate ? 'Save asset': 'Update asset'}
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
                                    Asset information
                                </h1>

                                <p className='text-[#6B7280] text-[12px] font-[400] leading-[16px]'>
                                    What is the details of the asset
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-[16px]'>
                            <div className='w-[30px] h-[30px] rounded-[50%] border-[2px] border-[#000] flex justify-center items-center'>2</div>

                            <div className='flex flex-col items-center gap-[2px]'>
                                <h1 className='text-[#6B7280] text-[14px] font-[700] leading-[16px]'>
                                    Asset setup
                                </h1>

                                <p className='text-[#6B7280] text-[12px] font-[400] leading-[16px]'>
                                    Provide asset configurations
                                </p>
                            </div>
                        </div>
                    </div>

                    {clickedEvent === 1 && <AssetInfo formik={formik} />}

                    {clickedEvent === -1 && <AssetSetup formik2={formik2} />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAsset