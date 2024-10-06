import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTView: false,
    },
    reducers: {
        toggleGPTView: (state) => {
            state.showGPTView = !state.showGPTView;
        }
    }
})

export const { toggleGPTView } = gptSlice.actions;
export default gptSlice.reducer;