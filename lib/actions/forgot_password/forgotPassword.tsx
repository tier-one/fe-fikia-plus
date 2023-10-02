import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

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
            email: string;
        };
      };
    };
}

const forgotPassword = async (email: string | null | undefined) => {
    const data = {
        email
    }
    try {
        const res = await API.post(`/api/v1/auth/forgot/password`, data);

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
        } else if (customError2.response && customError2.response.data && customError2.response.data.errors.email) {
          const errorMessage = customError2.response.data.errors.email;
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

export default forgotPassword;