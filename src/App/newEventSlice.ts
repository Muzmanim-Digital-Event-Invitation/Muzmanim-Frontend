import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const newEventSlice = createSlice({
    name: 'newEvent',
    initialState: null,
    reducers: {
        newEventAction: (state, action: PayloadAction<any>) => {
            state = action.payload
            return state
        }
    }
})

export const { newEventAction } = newEventSlice.actions

export default newEventSlice.reducer