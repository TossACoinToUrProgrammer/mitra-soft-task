import { all, fork } from "redux-saga/effects"

import { watchFetchComments, watchFetchPosts } from "./posts/sagas"

export function* rootWatcher() {
  yield all([fork(watchFetchPosts), fork(watchFetchComments)])
}
