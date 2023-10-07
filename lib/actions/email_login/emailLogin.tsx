import API from "@/utils/apiCall";

const emailLogin = async (email: string | null | undefined, password: string | null | undefined) => {
    const data = {
        email,
        password
    }
    try {
        const res = await API.post(`/api/v1/auth/email/manager/login`, data);

        return res.data;
    } catch (error) {
        return error;
        
    }
}

export default emailLogin;
