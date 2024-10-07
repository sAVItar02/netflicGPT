import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        currentLanguage: "en",
        shouldStopOverflow: false,
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        },
        setStopOverflow: (state, action) => {
            state.shouldStopOverflow = action.payload;
        },
    }
})

export const { changeLanguage, setStopOverflow } = configSlice.actions;
export default configSlice.reducer;