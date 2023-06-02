import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { servicesFunctions } from "../Services/ServicesFunctions";

const token = window.localStorage.getItem('MuzmanimLoggedToken');
let initialState = null;

if (token) {
    const { email, name, picture } : any = jwtDecode(token);
    initialState =  { email, name, picture } ;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            if (!window.localStorage.getItem('MuzmanimLoggedToken')) {
                console.log("test register");
                
                servicesFunctions.Register(action.payload).then(() => {
                                  
                    window.localStorage.setItem('MuzmanimLoggedToken', action.payload);
                    const { email, name, picture } : any= jwtDecode(action.payload);
                    console.log({email, name, picture});
                    state =  { email, name, picture };
                    return state;
                })
            }
            console.log("test login");
            
        window.localStorage.setItem('MuzmanimLoggedToken', action.payload);
        const { email, name, picture } : any= jwtDecode(action.payload);
        console.log({email, name, picture});
        state =  { email, name, picture };
        return state;
        },

        logoutRedux: () => {
            window.localStorage.removeItem('Token');
            return null;
        },

    }
})

export const { loginRedux, logoutRedux } = authSlice.actions;

export default authSlice.reducer;