import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    browser: "",
    os: "",
    isMobile: null,
    ip: "",
    lastLogin: "",
    firstLogin: "",
    isEmailVerified: false,
}

export const loginHistory = createSlice({
    name: "login_history",
    initialState,
    reducers: {
        setLoginHistory: (state, action) => {
            state.isMobile = action.payload?.isMobile;
            state.browser = action.payload?.browser;
            state.os = action.payload?.os;
        },
        setisEmailVerify: (state, action) => {
            state.isEmailVerified = action.payload?.isEmailVerified  
        },
        delLoginHistory: (state, action) => {

        }
    }
})

export const { setLoginHistory, setisEmailVerify, delLoginHistory } = loginHistory.actions
export default loginHistory.reducer