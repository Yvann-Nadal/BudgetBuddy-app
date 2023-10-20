import instance from './api.service';

const END_POINT = '/users';

const getAllUsers = async () => {
    const response = await instance.get(END_POINT);
    return response.data
}

const usersService = {
    getAllUsers
}

export default usersService;