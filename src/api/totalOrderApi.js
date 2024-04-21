import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";

export const totalOrderAdd = async (totalOrderRequest) => {
  const header = "Bearer " +localStorage.getItem('jwt');
  const res = await axios.post(`${API_SERVER_HOST}/totalOrders`, totalOrderRequest, {
    headers: {
      Authorization: header,
    },
  });
  return res.data;
};

export const getTotalOrders = async (page) => {
  const header ="Bearer " + localStorage.getItem('jwt');
  const res = await axios.get(`${API_SERVER_HOST}/totalOrders`,  {
    headers: {
      Authorization: header,
    }, params: {
      page
    },
  });
  return res.data.data;
};

export const getTotalOrder = async (totalOrderId) => {
  const header ="Bearer " + localStorage.getItem('jwt');
  const res = await axios.get(`${API_SERVER_HOST}/totalOrders/${totalOrderId}`,  {
    headers: {
      Authorization: header,
    },
  });
  return res.data;
};
