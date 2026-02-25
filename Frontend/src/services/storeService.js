import axios from "axios";

const API_URL = "http://localhost:8080/api/stores";

export const addStore = async (storeData) => {
  const response = await axios.post(`${API_URL}/add`, storeData);
  return response.data;
};

export const updateStore = async (storeData) => {
  const response = await axios.post(`${API_URL}/update`, storeData);
  return response.data;
};

export const deleteStore = async (storeId) => {
  const response = await axios.delete(`${API_URL}/delete/${storeId}`);
  return response.data;
};

export const getAllStores = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};
