import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTView: false,
        gptResults: {
            gptErrorMessage: "",
            gptResultMovies: null,
        }
    },
    reducers: {
        toggleGPTView: (state) => {
            state.showGPTView = !state.showGPTView;
        },
        addGptResultMovies: (state, action) => {
            state.gptResults.gptResultMovies = action.payload;
        },
        addGptErrorMessage: (state, action) => {
            state.gptResults.gptErrorMessage = action.payload;
        }
    }
})

export const { toggleGPTView, addGptErrorMessage, addGptResultMovies } = gptSlice.actions;
export default gptSlice.reducer;