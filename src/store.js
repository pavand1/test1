import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/auth/authSlice";
import loaderReducer from "./feature/loader/loader";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        loader: loaderReducer,
    },
});

export default store;
