import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";

export const getIssued = async () => {
  const header = "Bearer " +localStorage.getItem('jwt');
  const res = await axios.get(`${API_SERVER_HOST}/issued`, {
    headers: {
      Authorization: header,
    },
  });

  return res.data;
};
