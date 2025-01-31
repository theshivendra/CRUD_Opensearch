import axios from 'axios';

const BASE_URL = 'http://localhost:8080/accommodations';

export const getAllUsers = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const getUserById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};

export const createUser = async (user) => {
    const response = await axios.post(`${BASE_URL}/${id}`, user);
    return response.data;
};

export const updateUserById = async (id, user) => {
    const response = await axios.put(`${BASE_URL}/${id}`, user);
    return response.data;
};

export const deleteUserById = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};
