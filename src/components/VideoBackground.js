import React from 'react'
import useMovieVideos from '../hooks/useMovieVideos'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  const videoKey = useSelector(store => store.movie.featuredMovieVideo);
  useMovieVideos(movieId);
  return (
    <div className='w-full h-full pointer-events-none'>
        <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&showinfo=0&controls=0&disablekb`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground