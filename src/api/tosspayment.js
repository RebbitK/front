import axios from "axios";



export const totalOrderAdd = async (totalOrderRequest) => {
  const header = localStorage.getItem('jwt');
  const res = await axios.post(`https://js.tosspayments.com/v1/payment-widget`, totalOrderRequest, {
    headers: {
      Authorization: header,
    },
  });
  return res.data;
};
