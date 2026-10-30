import axios from "axios";

const BASE_URL = "https://amma-chethi-vanta-backend.onrender.com/foods";

export const getAllFoods = () => {
  return axios.get(BASE_URL);
};

export const getFoodById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

export const addFood = (food) => {
  return axios.post(BASE_URL, food);
};

export const updateFood = (id, food) => {
  return axios.put(`${BASE_URL}/${id}`, food);
};

export const deleteFood = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
