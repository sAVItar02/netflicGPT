import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlaying)
  if(!movies) return;

  const {id, original_title, overview} = movies[0];

  return (
    <div className='relative aspect-video w-full'>
        <VideoBackground movieId={id}/>
        <VideoTitle movieId={id} title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer