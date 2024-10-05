import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({imagePath}) => {
  return (
    <div>
        <img className='w-48 h-auto object-cover' src={IMAGE_CDN_URL + imagePath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard