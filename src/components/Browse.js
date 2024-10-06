import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GPTSearchPage from './GPTSearchPage';

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptView = useSelector(store => store.gpt.showGPTView);

  return (
    <div className='min-h-screen min-w-full bg-black'>
      <Header />
      <div>
        {
          showGptView ? <GPTSearchPage /> : <><MainContainer /><SecondaryContainer /></>
        }
      </div>
    </div>
  )
}

export default Browse