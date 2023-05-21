import { put, call, takeEvery, delay } from "redux-saga/effects"

import { setUser, toggleLoader } from "./reducer"
import { usersActions } from "./actions"
import { getUserReq } from "../../requests/users"

function* fetchUser({ payload }) {
  try {
    yield put(toggleLoader(true))
    yield delay(500)
    const response = yield call(() => getUserReq(payload))
    yield put(setUser(response.data))
  } catch (error) {
    yield put(toggleLoader(false))
  }
}

export function* watchFetchUser() {
  yield takeEvery(usersActions.FETCH_USER, fetchUser)
}
