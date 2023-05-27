import { configureStore } from "@reduxjs/toolkit";
import newEventReducer from "./newEventSlice";
import authSlice from "./authSlice";


export default configureStore({
    reducer: {
        newEvent: newEventReducer,
        authSlice: authSlice
    }
})