import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        currentLanguage: "en"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        }
    }
})

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;