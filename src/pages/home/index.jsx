import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "react-bootstrap"

import { fetchPosts } from "../../store/posts/reducer"
import PostList from "../../components/posts/post-list/PostList"

const HomePage = () => {
  const { loading, posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts())
    }
  }, [])

  return (
    <Container className="py-4">
      <h2>Posts</h2>
      {loading && <p>Loading...</p>}
      {!!posts.length && <PostList posts={posts} />}
    </Container>
  )
}

export default HomePage
