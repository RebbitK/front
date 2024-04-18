import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";

export const getCoupons = async () => {
  const res = await axios.get(`${API_SERVER_HOST}/coupons`);
  return res.data;
};
