import { useEffect } from "react"
import { API_OPTIONS, UPCOMING_API } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../utils/movieSlice";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movie.upcomingMovies);
    
    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies