import axios from "axios"
import { BASE_URL } from "../../consts"

export const getProducts = () => {
  return axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
} 