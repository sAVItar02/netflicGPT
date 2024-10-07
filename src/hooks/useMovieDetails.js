import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addMovieToGetDetailsFor } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieDetails = (movieId) => {
    const dispatch = useDispatch();

    const getMovieDetails = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US&append_to_response=videos,credits", API_OPTIONS);
        const json = await data.json();
        dispatch(addMovieToGetDetailsFor(json))
    }

    useEffect(() => {
        getMovieDetails();
    }, [])
}

export default useMovieDetails