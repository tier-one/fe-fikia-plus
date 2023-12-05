import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

interface CustomError extends Error {
    response?: {
      data: {
        message: string;
      };
    };
}

const rejectSubs = async (token: string | undefined, subId: string | undefined) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    try {
        const res = await API.patch(`/api/v1/subscriptions/${subId}/reject`, {}, { headers });
        console.log(res);

        toast.success(res.data, {
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
        console.log(error);
        
        const customError = error as CustomError;


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
        } else {
            toast.error('error while rejecting', {
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

        
        return {
            fund: []
        };
    }
}

export default rejectSubs;