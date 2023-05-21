import axios from "axios"

export const apiDomain = "https://jsonplaceholder.typicode.com"
export const instance = axios.create({
  baseURL: `${apiDomain}`,
})
