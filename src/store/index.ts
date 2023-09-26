import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk'

import stuReducer from './reducer'
export const store = configureStore({
    reducer: stuReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
