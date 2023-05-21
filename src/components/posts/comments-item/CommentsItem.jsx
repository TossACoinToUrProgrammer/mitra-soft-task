import React from "react"

const CommentsItem = ({ comment }) => {
  return (
    <li className="mb-3 pb-2 border-bottom">
      <b>{comment.email}</b> <br />
      <span>{comment.body}</span>
    </li>
  )
}

export default CommentsItem
