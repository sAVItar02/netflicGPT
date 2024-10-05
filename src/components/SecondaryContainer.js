import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlaying = useSelector(store => store.movie.nowPlaying);

  return (
    <div className='px-12 -mt-40 relative z-10 pb-20'>
      {
        nowPlaying && <MovieList title={"Now Playing"} movies={nowPlaying}/>
      }
    </div>
  )
}

export default SecondaryContainer