import { instance } from "."

export const getPostsReq = () => instance.get("/posts")
export const getCommentsReq = (postId) => instance.get("/comments?postId="+postId)
