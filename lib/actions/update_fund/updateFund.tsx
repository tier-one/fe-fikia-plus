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


export const uploadImage = async (imagePath: string) => {
    try {
        const response = await fetch(`${serverUrl}/api/upload`, {
            method: 'POST',
            body: JSON.stringify({ path: imagePath })
        })

        return response.json();
    } catch (error) {
        throw error;
    }
}

export const UpdateFunds = async (form: any, fundId: string | undefined, token: string | undefined ) => {
    try {
        const fundLogo = await uploadImage(form.fundLogo);

        if (fundLogo) {
            const investerId = '2a052e1a-93f8-47cf-9b6b-468b0c877981';
            const headers = {
                'Authorization': `Bearer ${token}`,
            };

            const datas = {
                AccoutDepositoryBankName: form.AccoutDepositoryBankName,
                AccountDepositoryAccountNumber: form.AccountDepositoryAccountNumber,
                CashAccountBankName: form.CashAccountBankName,
                CashAccountNumber: form.CashAccountNumber,
                CustodianBankName: form.CustodianBankName,
                CustodianParcentage: Number(form.CustodianParcentage),
                TrustBankName: form.TrustBankName,
                TrustPercentage: Number(form.TrustPercentage),
                FundName: form.fundName,
                FundGoal: form.FundGoal,
                FundSymbol: form.FundSymbol,
                FundType: form.fundType,
                FundLogo: fundLogo.url
            }

            const res = await API.patch(`/api/v1/fund/${fundId}`, datas, { headers });

            toast.success('Fund updated successlly', {
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
        }


        

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
            toast.error('Failed to created fund, please contact the adminstrator!', {
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
