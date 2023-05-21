import React from "react"
import { Col } from "react-bootstrap"

import styles from "./styles.module.css"
import avatarPng from "../../../images/user.png"

const PostItem = ({ post }) => {
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
    </Col>
  )
}

export default PostItem
