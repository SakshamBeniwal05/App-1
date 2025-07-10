import { configureStore } from "@reduxjs/toolkit";
import statusSlice from './slices/status'
const store = configureStore({
    reducer:{
        slice1: statusSlice,
    }
})

export default store;