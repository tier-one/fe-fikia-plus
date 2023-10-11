import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

type SetErrorFunction = (error: string | any) => void;

type SetLoadingFunction = (data: boolean) => void;

interface CustomError extends Error {
    response?: {
      data: {
        error: string
      };
    };
}

const emailConfirm = async (token: string | null | undefined, setError: SetErrorFunction, setLoading: SetLoadingFunction) => {
    setLoading(true);
    const data = {
        hash: token,
    }
    try {
        const res = await API.post(`/api/v1/auth/email/confirm`, data);

        toast.success(res.data.message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
        setLoading(false);

        return res.data;
    } catch (error) {
        const customError = error as CustomError;

        toast.error(customError.response?.data.error || 'Unexpected error! contact the owner', {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
        setError(customError.response?.data.error || 'Unexpected error! contact the owner');
        setLoading(false);
    }
}

export default emailConfirm;
