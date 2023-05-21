import React from "react"
import { Accordion, Spinner } from "react-bootstrap"

import CommentsItem from "../comments-item/CommentsItem"
import { ReactComponent as CommentsIcon } from "../../../assets/icons/comments.svg"

const CommentsAccordion = ({ getComments, comments }) => {
  return (
    <Accordion>
      <Accordion.Header className="border-top" onClick={getComments}>
        <CommentsIcon className="me-2" /> Comments
      </Accordion.Header>
      <Accordion.Body>
        {comments === undefined && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
        {comments?.length === 0 && <span>No comments yet</span>}
        <ul>
          {comments?.map((comment) => (
            <CommentsItem key={comment.id} comment={comment} />
          ))}
        </ul>
      </Accordion.Body>
    </Accordion>
  )
}

export default CommentsAccordion
