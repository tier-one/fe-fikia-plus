import API from "@/utils/apiCall";
import { toast } from 'react-toastify';

interface CustomError extends Error {
    response?: {
      data: {
        message: string;
      };
    };
}

const fetchClients = async (token: string | undefined) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    try {
        const res = await API.get(`/api/v1/users/role/2`, { headers });
        
        
        return res.data;
    } catch (error) {
        
        return error;
    }
}

export default fetchClients;
