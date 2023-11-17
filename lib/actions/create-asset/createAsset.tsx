import { FundForm } from "@/common.types";
import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

const isProduction = process.env.NODE_ENV === 'production';

const serverUrl = isProduction ? process.env.NEXT_PUBLIC_NEXTAUTH_URL : 'http://localhost:3000';

interface CustomError extends Error {
    response?: {
      data: {
        message: string;
      };
    };
}

interface CustomError2 extends Error {
    response?: {
      data: {
        errors: {
            FundLogo: string;
        };
      };
    };

}

export const createAsset = async (form: any, token: string | undefined ) => {
    try {

        const headers = {
            'Authorization': `Bearer ${token}`,
        };

        const formDatas = {
            name: form.name,
            price: form.price,
            value: form.value,
            note: form.note,
            equityDetails: {
                tickerSymbol: form.tickerSymbol,
                companyName: form.companyName,
                numberOfOutstandingShares: form.numberOfOutstandingShares,
                ISIN: form.ISIN,
                description: form.description,
                currency: form.currency,
                exchange: form.exchange,
                sectorIndustry: form.sectorIndustry,
                assetClass: form.assetClass,
                countryOfDomicile: form.countryOfDomicile
            },
            fixedIncomeDetails: {
                bondType: form.bondType,
                issuer: form.issuer,
                faceValue: form.faceValue,
                maturityDate: form.maturityDate,
                couponRate: form.couponRate,
                paymentFrequency: form.paymentFrequency,
                yieldToMaturity: form.yieldToMaturity,
                creditRating: form.creditRating,
                fixedIncomeType: form.fixedIncomeType,
                ISIN: form.ISIN,
                fixedIncomeName: form.fixedIncomeName,
                description: form.description,
                countryOfIssuer: form.countryOfIssuer,
                effectiveDuration: form.effectiveDuration,
                amortizationSchedule: form.amortizationSchedule,
                optionality: form.optionality,
                callablePuttable: form.callablePuttable,
                currency: form.currency,
                issueDate: form.issueDate,
                listingExchange: form.listingExchange
            },
            realEstateDetails: {
                propertyAddress: form.propertyAddress,
                propertyType: form.propertyType,
                rentalIncome: form.rentalIncome
            },
            alternativeInvestmentDetails: {
                investmentFundName: form.investmentFundName,
                investmentManager: form.investmentManager,
                fundStrategy: form.fundStrategy
            },
        }

        // Function to pick only existing type details
        const pickRelevantDetails = (formDatas: { name?: any; price?: any; value?: any; note?: any; equityDetails: any; fixedIncomeDetails: any; realEstateDetails: any; alternativeInvestmentDetails: any; }) => {
            if (formDatas.equityDetails.tickerSymbol) {
                return { equityDetails: formDatas.equityDetails };
            } else if (formDatas.fixedIncomeDetails.bondType) {
                return { fixedIncomeDetails: formDatas.fixedIncomeDetails };
            } else if (formDatas.realEstateDetails.propertyAddress) {
                return { realEstateDetails: formDatas.realEstateDetails };
            } else if (formDatas.alternativeInvestmentDetails.investmentFundName) {
                return { alternativeInvestmentDetails: formDatas.alternativeInvestmentDetails };
            }
        };

        // Prepare the data object with only the relevant details
        const relevantDetails = pickRelevantDetails(formDatas);
        const datas = {
            name: form.name,
            price: form.price,
            value: form.value,
            note: form.note,
            ...relevantDetails
        };

        const res = await API.post(`/api/v1/asset/assets`, datas, { headers });

        toast.success('Asset created successlly', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });


        return res.data;


        

    } catch (error) {
        const customError = error as CustomError;
        const customError2 = error as CustomError2;

        if (customError.response && customError.response.data && customError.response.data.message) {
            const errorMessage = customError.response.data.message;

            toast.error(errorMessage, {
                position: 'top-right',
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else if (customError2.response && customError2.response.data && customError2.response.data.errors.FundLogo) {
            const errorMessage = customError2.response.data.errors.FundLogo;
            toast.error(errorMessage, {
                position: 'top-right',
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else {
            toast.error('Failed to created asset, please contact the adminstrator!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            
        }



        return error;
        
    }
}
