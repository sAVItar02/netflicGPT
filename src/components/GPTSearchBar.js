import React from 'react'
import { langText } from '../utils/langConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.config.currentLanguage);

  return (
    <div className='text-white w-full flex items-center justify-center gap-4'>
        <input type="text" className='w-[min(500px,90%)] bg-black/80 border border-slate-500 focus-within:border-blue-500 rounded-lg px-4 py-2.5 outline-none' placeholder={langText[langKey].gptSearchPlaceHolder} />
        <button className='bg-[rgb(229,9,20)] hover:bg-[#c11119] px-6 py-2.5 rounded-lg duration-100'>{langText[langKey].search}</button>
    </div>
  )
}

export default GPTSearchBar