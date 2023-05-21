import React from "react"
import PostItem from "../post-item/PostItem"

const PostList = ({ posts }) => {
  return (
    <div className="py-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
