import React from "react"
import { useDispatch } from "react-redux"
import { Col } from "react-bootstrap"

import styles from "./styles.module.css"
import avatarPng from "../../../assets/images/user.png"
import { fetchComments } from "../../../store/posts/reducer"
import CommentsAccordion from "../comments-accordion/CommentsAccordion"

const PostItem = ({ post }) => {
  const dispatch = useDispatch()

  const getComments = () => {
    if (!post.comments) {
      dispatch(fetchComments(post.id))
    }
  }

  return (
    <Col className="mb-5" xl="6" lg="8">
      <div className="d-flex align-items-center mb-2">
        <img
          src={avatarPng}
          alt="avatar placeholder"
          className="me-3 block"
          role="button"
        />
        <span className={`fw-bolder fs-5 ${styles.postTitle}`}>
          {post.title}
        </span>
      </div>
      <p>{post.body}</p>
      <CommentsAccordion getComments={getComments} comments={post.comments} />
    </Col>
  )
}

export default PostItem
