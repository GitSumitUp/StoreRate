import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const addUser = async (userData) => {
  const response = await axios.post(`${API_URL}/add`, userData);
  return response.data;
};

export const updateUser = async (userData) => {
  const response = await axios.post(`${API_URL}/update`, userData);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/delete/${userId}`);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};
