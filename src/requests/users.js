import { instance } from "."

export const getUserReq = (userId) => instance.get("/users/" + userId)
