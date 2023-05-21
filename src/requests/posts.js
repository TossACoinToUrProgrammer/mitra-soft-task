import { instance } from "."

export const getPostsReq = () => instance.get("/posts")
