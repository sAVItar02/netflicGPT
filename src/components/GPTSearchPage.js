import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSearchSuggestions from './GPTSearchSuggestions'

const GPTSearchPage = () => {
  return (
    <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg")] min-h-screen min-w-screen relative'>
        <div className='flex flex-col items-center justify-start gap-10 bg-black/80 min-h-screen min-w-full pt-32 pb-20'>
            <GPTSearchBar />
            <GPTSearchSuggestions />
        </div>
    </div>
  )
}

export default GPTSearchPage