import axios from "axios"
import { API_SERVER_HOST } from "./productsApi"

const host = `${API_SERVER_HOST}/auth`

export const signup = async (signupParam) => {
    const header = { headers: { "Content-Type": "application/json" } };
    const body = {
      username: signupParam.username,
      password: signupParam.password,
      role: signupParam.role,
    };
  
    const res = await axios.post(`${host}/signup`, body, header);
    return res.data;
  };

export const loginPost = async (data) => {

  const body = {
    username: data.username,
    password: data.pw
  };

  const res = await axios.post(`${host}/login`,body)
  const token = res.headers['authorization'];
  if(token){
    localStorage.setItem('jwt', token);
  }
  return res.data

}





export const login = async (loginParam) => {
  const header = { headers: { "Content-Type": "application/json" } };
  const body = {
    username: loginParam.username,
    password: loginParam.password,
  };

  const res = await axios.post(`${host}/login`, body, header);
  return res.data;
};

