import { put, call, takeEvery, delay } from "redux-saga/effects"

import { getCommentsReq, getPostsReq } from "../../requests/posts"
import { setComments, setPosts, togglePostsLoader } from "./reducer"
import { postsActions } from "./actions"

function* fetchPosts() {
  try {
    yield put(togglePostsLoader(true))
    yield delay(500)
    const response = yield call(() => getPostsReq())
    yield put(setPosts(response.data))
  } catch (error) {
    yield put(togglePostsLoader(false))
  }
}

export function* watchFetchPosts() {
  yield takeEvery(postsActions.FETCH_POSTS, fetchPosts)
}

function* fetchComments({ payload }) {
  try {
    yield delay(500)
    const response = yield call(() => getCommentsReq(payload))
    yield put(setComments(payload, response.data))
  } catch (error) {
    yield put(setComments(payload, []))
    yield put(togglePostsLoader(false))
  }
}

export function* watchFetchComments() {
  yield takeEvery(postsActions.FETCH_COMMENTS, fetchComments)
}
