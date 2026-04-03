import { configureStore } from '@reduxjs/toolkit'
import sortReducer from './sort/reducers'
import filterReducer from './filter/reducers'

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch