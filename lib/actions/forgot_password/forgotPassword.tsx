import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

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
        throw error;
    }
}

export default forgotPassword;