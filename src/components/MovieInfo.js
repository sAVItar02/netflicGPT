import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import useSimilarMovies from '../hooks/useSimilarMovies';
import MovieCard from './MovieCard';
import { setStopOverflow } from '../utils/configSlice';

const MovieInfo = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useMovieDetails(searchParams.get("m"));
  useSimilarMovies(searchParams.get("m"));
  
  const movieToGetDetailsFor = useSelector(store => store.movie.movieToGetDetailsFor);
  const similarMovies = useSelector(store => store.movie.similarMovies);

  useEffect(() => {
    dispatch(setStopOverflow(true));
    console.log(process.env.REACT_APP_TMDB_K);
  }, [])

  if(!searchParams.get("m")) return <div className='text-lg font-semibold text-white'>No query parameter provided, please provide movie id in the search query.</div>

  if(!movieToGetDetailsFor) return null;
  if(!similarMovies) return null;

  const videoKey = movieToGetDetailsFor?.videos?.results.filter(vid => vid.type === "Trailer")[0]?.key;
  const creditsArr = movieToGetDetailsFor?.credits?.cast.slice(0,5);
  console.log(creditsArr);
  
  return (
    <div className='absolute left-1/2 -translate-x-1/2 sm:top-20 top-2 bg-black w-[min(1000px,90%)] rounded-lg text-white border border-gray-500 z-30 mb-40'>
      <iframe className='w-full aspect-video rounded-t-lg' src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&showinfo=0&controls=0&disablekb&loop=1&playlist=${videoKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <div className='sm:p-8 p-2 flex sm:flex-row flex-col items-center justify-between gap-8'>
        <div className='flex flex-col items-start justify-start gap-4 sm:max-w-[60%]'>
          <div className='flex items-center justify-start gap-2 text-gray-500'>
            <span>{movieToGetDetailsFor?.release_date.split("-")[0]}</span>
            <span className='whitespace-nowrap'>{movieToGetDetailsFor?.runtime} mins</span>
            <span>{movieToGetDetailsFor?.status}</span>
          </div>

          <h2 className='font-semibold text-4xl'>{movieToGetDetailsFor?.title}</h2>
          <p className='text-gray-400'>{movieToGetDetailsFor?.overview}</p>

        </div>

        <div className='flex flex-col gap-4 sm:max-w-[30%]'>
          <div className='flex flex-wrap items-center justify-start gap-1'>
            <h3 className='text-sm text-gray-500 font-semibold'>Cast: </h3>
            {
              creditsArr.map(c => <span key={c.name}  className='text-white underline text-sm'>{c.name}, </span>)
            }
          </div>
          <div className='flex flex-wrap items-center justify-start gap-1'>
            <h3 className='text-sm text-gray-500 font-semibold'>Genres: </h3>
            {
              movieToGetDetailsFor?.genres?.map(genre => <span key={genre.name} className='text-white underline text-sm'>{genre.name}, </span>)
            }
          </div>
        </div>
        
      </div>
      
      <div className='sm:p-8 p-2'>
        <h3 className='text-2xl font-semibold mb-4'>Similar Movies</h3>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {
            similarMovies.length !== 0 ?
            similarMovies.map(movie => {
              if(movie.poster_path) return <MovieCard key={movie.id} movieId={movie.id} imagePath={movie.poster_path} />
              return null;
            }) : "Similar movies not found :("
          }
        </div>
      </div>
    </div>
  )
}

export default MovieInfo