import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { addSimilarMovies } from '../utils/movieSlice';

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch();
  
  const getSimilarMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/similar?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addSimilarMovies(json.results));
  }

  useEffect(() => {
    getSimilarMovies();
  }, [])
}

export default useSimilarMovies