import { useEffect } from "react"
import { API_OPTIONS, TOP_RATED_API } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movie.topRatedMovies);
    
    const getTopRatedMovies = async () => {
        const data = await fetch(TOP_RATED_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies