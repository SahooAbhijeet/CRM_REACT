import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from '../Redux/Slices/AuthSlice'

const appStore = configureStore({
    reducer: {
        auth: authSliceReducer
    },
    devTools: true
});

export default appStore;