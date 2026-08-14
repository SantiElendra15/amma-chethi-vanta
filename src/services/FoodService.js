import axios from "axios";

const BASE_URL = "https://amma-chethi-vanta-backend.onrender.com/foods";

export const getAllFoods = () => {
  return axios.get(BASE_URL);
};

export const getFoodById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};
