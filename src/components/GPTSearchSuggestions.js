import React from 'react'
import MovieCard from "./MovieCard";
import { useSelector } from 'react-redux';
import { langText } from '../utils/langConstants';

const GPTSearchSuggestions = () => {
  const gptResults = useSelector(store => store.gpt.gptResults);
  const langKey = useSelector(store => store.config.currentLanguage);
  if(!gptResults.gptResultMovies) return;

  const gptMoviesFlat = gptResults.gptResultMovies.flat(1);
  console.log(gptMoviesFlat);

  return (
    <div className='bg-black/90 w-[min(95%,1200px)] sm:p-8 p-2'>
      <h2 className='text-white text-lg sm:text-2xl font-semibold mb-5'>{langText[langKey].suggestionHeading}</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {gptMoviesFlat.map(movie => {
          if(movie.poster_path) return <MovieCard key={movie.id} movieId={movie.id} imagePath={movie.poster_path} />
          return null;
          })}
      </div>
    </div>
  )
}

export default GPTSearchSuggestions