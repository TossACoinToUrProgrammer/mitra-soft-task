import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from "redux-saga"

import { rootReducer } from "./rootReducer"
import { rootWatcher } from "./rootWatcher"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)

export default store
