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

export const getList = async (pageParam, searchValue) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${host}`, {
    params: { page: page, size: size, searchValue: searchValue },
  });
  return res.data;
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
