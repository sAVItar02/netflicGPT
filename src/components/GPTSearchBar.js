import React, { useState } from 'react'
import { langText } from '../utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { API_OPTIONS, STUFF } from '../utils/constants'
import { addGptErrorMessage, addGptResultMovies } from '../utils/gptSlice'

const GPTSearchBar = () => {
    const [gptInput, setGptInput] = useState("");
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.currentLanguage);

    const getTMDBResults = async (movieName) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movieName +"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const getResults = async () => {
        try {
            const genAI = new GoogleGenerativeAI(STUFF);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
            const prompt = "Act as a movie recommendation system and suggest 5 movies for the prompt: " + gptInput + ". Make it a list of comma separated vaules like the exmple shown ahead. Example: Joker, Joker 2, The Avengers, Deadpool, Wolverine";
    
            const result = await model.generateContent(prompt);
    
            let gptResults = result.response.text();
            gptResults = gptResults.split(", ");
    
            const tmdbResults = gptResults.map(movie => getTMDBResults(movie));
            const tmdbResultsResolved = await Promise.all(tmdbResults);
            console.log(tmdbResultsResolved);
            dispatch(addGptResultMovies(tmdbResultsResolved));
        } catch(e) {
            dispatch(addGptErrorMessage(`Uh Oh, Something Went Wrong, Please Try Again After Some Time. ${e}`))
        }
    }


  return (
    <div className='text-white w-full flex items-center justify-center px-2 sm:px-0 sm:gap-4 gap-1'>
        <input value={gptInput} onChange={(e) => setGptInput(e.target.value)} type="text" className='w-[min(500px,90%)] bg-black/80 border border-slate-500 focus-within:border-blue-500 rounded-lg px-4 py-2.5 outline-none' placeholder={langText[langKey].gptSearchPlaceHolder} />
        <button onClick={getResults} className='bg-[rgb(229,9,20)] hover:bg-[#c11119] sm:px-6 px-2 py-2.5 rounded-lg duration-100'>{langText[langKey].search}</button>
    </div>
  )
}

export default GPTSearchBar