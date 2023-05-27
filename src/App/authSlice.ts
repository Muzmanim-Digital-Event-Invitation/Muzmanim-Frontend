import { createSlice } from "@reduxjs/toolkit";


const token = window.localStorage.getItem('MuzmanimLogged');
let initialState = null;

if (token) {
    initialState =  token ;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRedux: (sate, action) => {
            window.localStorage.setItem('MuzmanimLogged', action.payload);
        },

        logoutRedux: () => {
            window.localStorage.removeItem('MuzmanimLogged');
            return null;
        },

    }
})

export const { loginRedux, logoutRedux } = authSlice.actions;

export default authSlice.reducer;