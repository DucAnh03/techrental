import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import auth from './feature/auth'

export const createStore = (
    option?: ConfigureStoreOptions['preloadedState'] | undefined,
) =>
    configureStore({
        reducer: {
            auth: auth,
        },
    })
export const store = createStore()

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
