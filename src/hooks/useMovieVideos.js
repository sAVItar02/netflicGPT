import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addFeaturedMovieVideo } from "../utils/movieSlice";


const useMovieVideos = (movieId) => {
    const dispatch = useDispatch();
    const featuredMovieVideo = useSelector(store => store.movie.featuredMovieVideo);

    const getVideoData =  async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS);
        const json = await data.json();
        const featuredMovieTrailer = json?.results.filter(m => m.type === "Trailer")
        dispatch(addFeaturedMovieVideo(featuredMovieTrailer.length ? featuredMovieTrailer[0].key : json?.results[0]));
    }

    useEffect(() => {
        !featuredMovieVideo && getVideoData();
    }, [])
}

export default useMovieVideos