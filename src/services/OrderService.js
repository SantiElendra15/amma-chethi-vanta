import axios from "axios";

const API_URL = "https://amma-chethi-vanta-backend.onrender.com/orders";

export const placeOrder = (order) => {
  return axios.post(API_URL, order);
};

export const getAllOrders = () => {
  return axios.get(API_URL);
};

