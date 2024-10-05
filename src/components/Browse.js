import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlaying();

  return (
    <div className='min-h-screen min-w-full bg-gray-500'>
      <Header />
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Browse