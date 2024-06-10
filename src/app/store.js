import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/Userslice"
import loginHistoryrReducer from "../Feature/LoginHistorySlice";
export const store=configureStore({
    reducer:{
        user:userReducer,
        loginHistory: loginHistoryrReducer
    }
})