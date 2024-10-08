import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setStopOverflow } from '../utils/configSlice'

const MovieCard = ({imagePath, movieId}) => {
  const dispatch = useDispatch();

  const handleMovieCardClick = () => {
    console.log("HERE")
    dispatch(setStopOverflow(true));
  }

  return (
    <Link to={`/browse/movie?m=${movieId}`} onClick={() => handleMovieCardClick()}>
      <div>
          <img className='w-36 sm:w-48 h-auto object-cover' src={IMAGE_CDN_URL + imagePath} alt="Movie Card" />
      </div>
    </Link>
  )
}

export default MovieCard