import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movieStore = useSelector(store => store.movie);

  return (
    <div className='px-12 mt-20 md:-mt-20 lg:-mt-40 relative z-10 pb-20 flex flex-col gap-20'>
      {movieStore.nowPlaying && <MovieList title={"Now Playing"} movies={movieStore.nowPlaying}/>}
      {movieStore.popularMovies && <MovieList title={"Popular Movies"} movies={movieStore.popularMovies}/>}
      {movieStore.topRatedMovies && <MovieList title={"Top Rated"} movies={movieStore.topRatedMovies}/>}
      {movieStore.upcomingMovies && <MovieList title={"Upcoming"} movies={movieStore.upcomingMovies}/>}
    </div>
  )
}

export default SecondaryContainer