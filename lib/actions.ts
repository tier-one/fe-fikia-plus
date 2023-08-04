import axios from "axios";

const serverUrl = 'https://backend.fikia.io';

export const emailLogin = async (email: string | null | undefined, password: string | null | undefined) => {
    const data = {
        email,
        password
    }
    try {
        const res = await axios.post(`${serverUrl}/api/v1/auth/email/login`, data);

        return res.data;
    } catch (error) {
        throw error;
    }
}

