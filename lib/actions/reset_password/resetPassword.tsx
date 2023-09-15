import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

interface CustomError extends Error {
    response?: {
      data: {
        errors: {
            hash: string;
        };
      };
    };
}

const resetPassword = async (password: string | null | undefined, token: string | null | undefined, router: any) => {
    const data = {
        password,
        hash: token
    }
    try {
        const res = await API.post(`/api/v1/auth/reset/password`, data);

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


        router.push('/login')


        return res;
    } catch (error) {
        const customError = error as CustomError;
        
        if (customError.response && customError.response.data && customError.response.data.errors.hash) {
          const errorMessage = customError.response.data.errors.hash;
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
            toast.error('An error occurred.', {
              position: 'top-right',
              autoClose: 6000,
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

export default resetPassword;