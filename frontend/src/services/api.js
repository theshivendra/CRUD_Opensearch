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
    // Assuming the user provides the ID in the form, like user.id
    const response = await axios.post(`${BASE_URL}/${user.id}`, user);  // Passing user.id in the URL
    return response.data;
};


export const updateUserById = async (id, user) => {
    const response = await axios.put(`${BASE_URL}/${id}`, user);
    return response.data;
};

export const deleteUserById = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};


export const searchUsers = async (key, value) => {
    const response = await fetch(`http://localhost:8080/accommodations/search?field=${key}&value=${value}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json(); // Ensure this returns the correct data
};
