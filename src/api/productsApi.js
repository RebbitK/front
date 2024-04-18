import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";
const host = `${API_SERVER_HOST}/products`;

export const postAdd = async (product, userDetails) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.post(`${host}`, product, {
    headers: {
      Authorization: `Bearer ${userDetails.accessToken}`,
    },
  });
  return res.data;
};

export const getList = async ({ page, size }) => {
  const response = await axios.get(`${host}`, {
    params: {
      page,
      size,
    },
  });
  return response.data.data.productList; // productList 필드 반환
};

export const getOne = async (productId) => {
  const res = await axios.get(`${host}/${productId}`);
  return res.data;
};

export const putOne = async (productId, product, userDetails) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.patch(`${host}/${productId}`, product, {
    headers: {
      Authorization: `Bearer ${userDetails.accessToken}`,
    },
  });
  return res.data;
};

export const deleteOne = async (productId, userDetails) => {
  const res = await axios.delete(`${host}/${productId}`, {
    headers: {
      Authorization: `Bearer ${userDetails.accessToken}`,
    },
  });
  return res.data;
};
