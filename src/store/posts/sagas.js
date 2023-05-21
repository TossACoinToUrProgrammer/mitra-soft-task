import { put, call, takeEvery } from "redux-saga/effects"

import { getPostsReq } from "../../requests/posts"
import { setPosts, togglePostsLoader } from "./reducer"
import { postsActions } from "./actions"

function* fetchPosts() {
  try {
    yield put(togglePostsLoader(true))
    const response = yield call(() => getPostsReq())
    yield put(setPosts(response.data))
  } catch (error) {
    yield put(togglePostsLoader(false))
  }
}

export function* watchFetchPosts() {
  yield takeEvery(postsActions.FETCH_POSTS, fetchPosts)
}
