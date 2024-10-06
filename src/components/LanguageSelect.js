import React from 'react'
import { langOptions } from '../utils/langConstants'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../utils/configSlice';

const LanguageSelect = () => {
    const dispatch = useDispatch();

    const handleLangChage = (e) => {
        dispatch(changeLanguage(e.target.value));    
    }

  return (
    <div className='text-white'>
        <select onChange={(e) => handleLangChage(e)}  className='bg-black hover:bg-gray-900 duration-100 border border-slate-500 rounded-lg px-6 py-1 cursor-pointer outline-none'>
            {
                langOptions.map(lang => <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)
            }
        </select>
    </div>
  )
}

export default LanguageSelect;