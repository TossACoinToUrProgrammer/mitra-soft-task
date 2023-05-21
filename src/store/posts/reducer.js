import { postsActions } from "./actions"

const initialState = {
  posts: [],
  loading: false,
  error: null,
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsActions.TOGGLE_LOADER:
      return { ...state, loading: action.payload }

    case postsActions.SET_POSTS:
      return { ...state, posts: action.payload, loading: false }

    case postsActions.SET_COMMENTS:
      const { postId, comments } = action.payload
      const newPosts = state.posts.map((post) =>
        post.id === postId ? { ...post, comments } : post
      )

      return { ...state, posts: newPosts }

    default:
      return state
  }
}

export const togglePostsLoader = (bool) => ({
  type: postsActions.TOGGLE_LOADER,
  payload: bool,
})

export const fetchPosts = () => ({
  type: postsActions.FETCH_POSTS,
})

export const setPosts = (posts) => ({
  type: postsActions.SET_POSTS,
  payload: posts,
})

export const fetchComments = (postId) => ({
  type: postsActions.FETCH_COMMENTS,
  payload: postId,
})

export const setComments = (postId, comments) => ({
  type: postsActions.SET_COMMENTS,
  payload: { postId, comments },
})
