import { usersActions } from "./actions"

const initialState = {
  users: [],
  loading: false,
  error: null,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersActions.TOGGLE_USER_LOADER:
      return { ...state, loading: action.payload }

    case usersActions.SET_USER:
      return { ...state, users: [...state.users, action.payload], loading: false }

    default:
      return state
  }
}

export const toggleLoader = (bool) => ({
  type: usersActions.TOGGLE_USER_LOADER,
  payload: bool,
})

export const fetchUser = (userId) => ({
  type: usersActions.FETCH_USER,
  payload: userId
})

export const setUser = (user) => ({
  type: usersActions.SET_USER,
  payload: user,
})

