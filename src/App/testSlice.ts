import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: 'test',
    initialState: null,
    reducers: {
        testAction: (state, action: PayloadAction<any>) => {
            state = action.payload
            return state
        }
    }
})

export const { testAction } = testSlice.actions

export default testSlice.reducer