import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS, NOW_PLAYING_API } from '../utils/constants';
import { addNowPlaying } from '../utils/movieSlice';

const useNowPlaying = () => {
    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlaying(json.results))
    }

    useEffect(() => {
        getNowPlaying();
    }, []);
}

export default useNowPlaying