import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlaying: null,
        popularMovies: null, 
        topRatedMovies: null,
        upcomingMovies: null,
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
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addFeaturedMovieLogo: (state, action) => {
            state.featuredMovieLogo = action.payload;
        },
        addFeaturedMovieVideo: (state, action) => {
            state.featuredMovieVideo = action.payload;
        }
    }
})

export const { addNowPlaying, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addFeaturedMovieLogo, addFeaturedMovieVideo } = movieSlice.actions;
export default movieSlice.reducer;