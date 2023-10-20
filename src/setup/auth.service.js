import instance from "./api.service";

const END_POINT = "/auth";

const login = async (credentials) => {
    const response = await instance.post(END_POINT, credentials);
    
    return response.data;
    }

const authService = {
    login
}

