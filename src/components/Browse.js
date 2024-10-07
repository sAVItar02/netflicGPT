import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useDispatch, useSelector } from 'react-redux';
import GPTSearchPage from './GPTSearchPage';
import { Link, Outlet } from 'react-router-dom';
import { setStopOverflow } from '../utils/configSlice';

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptView = useSelector(store => store.gpt.showGPTView);
  const shouldStopOverflow = useSelector(store => store.config.shouldStopOverflow);
  const dispatch = useDispatch();

  return (
    <div className={`min-h-screen min-w-full bg-black relative`}>
      <Header />
      <div>
        {
          showGptView ? <GPTSearchPage /> : <><MainContainer /><SecondaryContainer /></>
        }
      </div>

      <div className='rounded-lg w-full pb-20 mb-40'>
        { shouldStopOverflow && <Link onClick={() => dispatch(setStopOverflow(false))} to={"/browse"} className='fixed inset-0 z-[25] bg-black/80'></Link> }
        <Outlet />
      </div>
    </div>
  )
}

export default Browse