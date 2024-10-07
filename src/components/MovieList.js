import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    const container = useRef();

    const scrollRight = () => {
        container.current.scrollLeft += 600;
    }

    const scrollLeft = () => {
        container.current.scrollLeft -= 600;
    }

  return (
    <div className='text-white flex flex-col gap-6'>
        <h1 className='text-3xl font-bold [text-shadow:1px_1px_2px_#000000]'>{title}</h1>
        <div className='relative'>
            <div ref={container}  className='flex overflow-x-scroll no-scrollbar scroll-smooth'>

                <button onClick={scrollLeft}  className='absolute left-0 bottom-0 bg-black/30 text-white flex items-center justify-center h-full w-20'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                </button>

                <div className='grid grid-flow-col auto-cols-max gap-4'>
                    { movies.map(movie => <MovieCard key={movie.id} movieId={movie.id} imagePath={movie.poster_path}/>) }
                </div>

                <button onClick={scrollRight} className='absolute right-0 top-0 bg-black/30 text-white flex items-center justify-center h-full w-20'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default MovieList