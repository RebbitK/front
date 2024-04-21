import axios from "axios"
import { API_SERVER_HOST } from "./productsApi"


const host = `${API_SERVER_HOST}/auth`


export const loginPost = async (data) => {
  const body = {
    username : data.username,
    password: data.pw

  };
  const res = await axios.post(`${host}/login`, body);
  const token = res.headers['authorization'].split("Bearer ")[1];
  
  if (token) {
    localStorage.setItem('jwt',token);
  }

  return res.data
}

export const signupPost = async (data) => {
  const body = {
    username : data.username,
    password: data.password,
    phoneNumber :data.phoneNumber,
    consent : data.consent

  };
  const res = await axios.post(`${host}/signup`, body);
  
  return res.data
}

// export const loginPost = async (loginParam) => {

//   const header = {headers: {"Content-Type": "x-www-form-urlencoded"}}

//   const form = new FormData()
//   form.append('username', loginParam.username)
//   form.append('password', loginParam.password)

//   const res = await axios.post(`${host}/login`, form, header)

//   return res.data

// }
// export const signup = async (signupParam) => {
//     const header = { headers: { "Content-Type": "application/json" } };
//     const body = {
//       username: signupParam.username,
//       password: signupParam.password,
//       role: signupParam.role,
//     };
  





//로그인 할 떄 해 줘야 하느
// axios.defaults.headers.common.Authorization = res.headers['authorization']

//로그아웃할 할 때 해줘야 하는 것
// axios.defaults.headers.common.Authorization = ""

