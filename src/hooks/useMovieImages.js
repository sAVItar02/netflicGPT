import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addFeaturedMovieLogo } from "../utils/movieSlice";


const useMovieImages = (movieId) => {
    const dispatch = useDispatch();

    const getImageData =  async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/images", API_OPTIONS);
        const json = await data.json();
        dispatch(addFeaturedMovieLogo({
            logoPath: json?.logos[0]?.file_path,
            logoAspect: json?.logos[0]?.aspect_ratio
        }))
    }

    useEffect(() => {
        getImageData();
    }, [])
}

export default useMovieImages