import {all, fork} from 'redux-saga/effects'

import { watchFetchPosts } from "./posts/sagas"

export function* rootWatcher() {
  yield all([fork(watchFetchPosts)])
}
