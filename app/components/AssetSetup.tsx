import React from 'react';
import InputField from './InputField';
import NewButton from './NewButton';
import { FormikProps, useFormik } from 'formik';
import EquityType from './EquityType';
import FixedIncomeType from './FixedIncomeType';
import RealEstateType from './RealEstateType';
import AlternativeType from './AlternativeType';

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

    realEstateFormik: FormikProps<{
        propertyAddress: string;
        propertyType: string;
        rentalIncome: string;
    }>;

    alternativeFormik: FormikProps<{
        investmentFundName: string;
        investmentManager: string;
        fundStrategy: string;
    }>;
    formik: FormikProps<{
        name: string;
        price: string;
        value: string;
        note: string;
        type: string
    }>;
}

const AssetSetup = ({ equityFormik, fixedIncomeFormik, realEstateFormik, alternativeFormik, formik }: Props) => {
  return (
    <div className='flex flex-col items-start gap-[24px] self-stretch'>
        <div className='flex flex-col items-start gap-[24px] self-stretch'>
            {
              formik.values.type === "Equity Securities" &&
                (<>
                    <EquityType equityFormik={equityFormik} />

                    <div className='h-[1px] w-full self-stretch bg-[#E5E9F0]'></div>
                </>)
            }

            {
              formik.values.type === "Fixed Income" &&
                (<>
                    <FixedIncomeType fixedIncomeFormik={fixedIncomeFormik} />

                    <div className='h-[1px] w-full self-stretch bg-[#E5E9F0]'></div>
                </>)
            }

            {
              formik.values.type === "Real Estate" &&
                (<>
                    <RealEstateType realEstateFormik={realEstateFormik} />

                    <div className='h-[1px] w-full self-stretch bg-[#E5E9F0]'></div>
                </>)
            }

            {
                formik.values.type === "Alternative Investments" &&
                (<AlternativeType alternativeFormik={alternativeFormik} />)
            }
        </div>
    </div>
  )
}

export default AssetSetup