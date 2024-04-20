import jwtAxios from "../util/jwtUtil"

export const API_SERVER_HOST = "http://localhost:8080";

export const getCartItems = async ( ) => {

  const res = await jwtAxios.get(`${API_SERVER_HOST}/orders`)

  return res.data

}

export const postChangeCart = async (productId) => {

  const res = await jwtAxios.post(`${API_SERVER_HOST}/products/${productId}/orders`)

  return res.data
}
