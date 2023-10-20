import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth';

const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);

    return response.data;
    }

const getUser = async (token) => {
    const responde = await axios.get(`${API_URL}/profile`,token);
    return responde.data;
}



const authService = {
    login,
    getUser,
}

export default authService;