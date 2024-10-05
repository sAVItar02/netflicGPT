import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlaying: null,
        featuredMovieLogo: {
            logoPath: null,
            logoAspect: null,
        },
        featuredMovieVideo: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addFeaturedMovieLogo: (state, action) => {
            state.featuredMovieLogo = action.payload;
        },
        addFeaturedMovieVideo: (state, action) => {
            state.featuredMovieVideo = action.payload;
        }
    }
})

export const { addNowPlaying, addFeaturedMovieLogo, addFeaturedMovieVideo } = movieSlice.actions;
export default movieSlice.reducer;