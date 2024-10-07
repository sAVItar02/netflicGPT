import React from 'react'
import MovieCard from "./MovieCard";
import { useSelector } from 'react-redux';

const GPTSearchSuggestions = () => {
  const gptResults = useSelector(store => store.gpt.gptResults);
  if(!gptResults.gptResultMovies) return;

  const gptMoviesFlat = gptResults.gptResultMovies.flat(1);
  console.log(gptMoviesFlat);

  return (
    <div className='bg-black/90 w-[min(95%,1200px)] flex flex-wrap items-center justify-center gap-4'>
      {gptMoviesFlat.map(movie => {
        if(movie.poster_path) return <MovieCard key={movie.id} imagePath={movie.poster_path} />
        return null;
        })}
    </div>
  )
}

export default GPTSearchSuggestions