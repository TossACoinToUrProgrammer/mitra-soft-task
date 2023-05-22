import React from "react"
import { useDispatch } from "react-redux"
import { Col } from "react-bootstrap"

import styles from "./styles.module.css"
import avatarPng from "../../../assets/images/user.png"
import { fetchComments } from "../../../store/posts/reducer"
import CommentsAccordion from "../comments-accordion/CommentsAccordion"
import { Link } from "react-router-dom"

const PostItem = ({ post }) => {
  const dispatch = useDispatch()

  const getComments = () => {
    if (!post.comments) {
      dispatch(fetchComments(post.id))
    }
  }

  return (
    <Col className={`${styles.cardWrapper} mb-5`} xl="6" lg="8">
      <div className={styles.card}>
        <div className="d-flex align-items-center mb-2">
          <Link to={`/user/${post.userId}`} className="me-3 block">
            <img src={avatarPng} alt="avatar placeholder" />
          </Link>
          <span className={`fw-bolder fs-5 ${styles.postTitle}`}>
            {post.title}
          </span>
        </div>
        <p>{post.body}</p>
        <CommentsAccordion getComments={getComments} comments={post.comments} />
      </div>
    </Col>
  )
}

export default PostItem
