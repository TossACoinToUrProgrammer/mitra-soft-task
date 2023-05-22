import React, { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Container, Spinner, Card, ListGroup } from "react-bootstrap"

import { fetchUser } from "../../store/users/reducer"
import PostList from "../../components/posts/post-list/PostList"
import { fetchPosts } from "../../store/posts/reducer"

const UserPage = () => {
  const { userId } = useParams()
  const [currentUser, setCurrentUser] = useState()

  const { posts, loading: postsLoading } = useSelector((state) => state.posts)
  const { users, loading } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const userPosts = useMemo(
    () => posts.filter((post) => post.userId == userId),
    [posts]
  )

  useEffect(() => {
    if (currentUser) return

    const foundUser = users.find((user) => user.id == userId)
    if (!foundUser) {
      dispatch(fetchUser(userId))
    } else {
      setCurrentUser(foundUser)
    }
  }, [users])

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts())
    }
  }, [posts])

  if (!currentUser) {
    return (
      <div className="d-flex justify-content-center p-5 mt-5">
        {loading && <Spinner className="m-auto" animation="border" />}
      </div>
    )
  }

  return (
    <Container className="py-3">
      <Link to={"/"} className="nav-link mb-4">
        {"<"} Back
      </Link>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{currentUser.username}</Card.Title>
          <Card.Subtitle>{currentUser.name}</Card.Subtitle>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Phone: {currentUser.phone}</ListGroup.Item>
          <ListGroup.Item>Website: {currentUser.website}</ListGroup.Item>
          <ListGroup.Item>City: {currentUser.address.city}</ListGroup.Item>
          <ListGroup.Item>Company: {currentUser.company.name}</ListGroup.Item>
        </ListGroup>
      </Card>

      <h2 className="mt-5 mb-2">User posts</h2>
      {postsLoading && <Spinner animation="border" />}
      {!userPosts.length && <div>No posts yet</div>}
      {userPosts && <PostList posts={userPosts} />}
    </Container>
  )
}

export default UserPage
