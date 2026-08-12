import axios from "axios";

const BASE_URL = "http://localhost:8080/foods";

export const getAllFoods = () => {
  return axios.get(BASE_URL);
};

export const getFoodById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};
