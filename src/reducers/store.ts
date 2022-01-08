import { configureStore } from '@reduxjs/toolkit'
import test from './test'

export function makeStore() {
    return configureStore({
        reducer: {
            test
        }
    })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store