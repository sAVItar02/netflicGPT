import { useEffect } from "react"
import { API_OPTIONS, POPULAR_API } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movie.popularMovies);
    
    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, [])
}

export default usePopularMovies