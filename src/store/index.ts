import {combineReducers, configureStore} from '@reduxjs/toolkit'
import resultsTest from "./reducers/TestReducer";

const rootReducer = combineReducers({
    resultsTest
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']