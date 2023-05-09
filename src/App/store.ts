import { configureStore } from "@reduxjs/toolkit";
import newEventReducer from "./newEventSlice";


export default configureStore({
    reducer: {
        newEvent: newEventReducer
    }
})