import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, NOW_PLAYING_API } from '../utils/constants';
import { addNowPlaying } from '../utils/movieSlice';

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const nowPlaying = useSelector(store => store.movie.nowPlaying);

    const getNowPlaying = async () => {
        const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlaying(json.results))
    }

    useEffect(() => {
        !nowPlaying && getNowPlaying();
    }, []);
}

export default useNowPlaying