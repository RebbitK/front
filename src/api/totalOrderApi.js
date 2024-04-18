import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";

export const totalOrderAdd = async (totalOrderRequest) => {
  const header = localStorage.getItem('jwt');
  const res = await axios.post(`${API_SERVER_HOST}/totalOrders`, totalOrderRequest, {
    headers: {
      Authorization: header,
    },
  });
  return res.data;
};
