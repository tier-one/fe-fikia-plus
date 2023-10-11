import API from "@/utils/apiCall";

const fetchFunds = async (token: string | undefined) => {
    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    try {
        const res = await API.get(`/api/v1/fund-manager/get-all-fund-setup`, { headers });
        console.log(res, 'This all funds');
        
        
        return res.data;
    } catch (error) {
        console.log(error);
        
        return error;
    }
}

export default fetchFunds;
