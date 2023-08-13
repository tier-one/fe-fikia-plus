import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

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


        router.push('/auth/login')


        return res;
    } catch (error) {
        throw error;
    }
}

export default resetPassword;