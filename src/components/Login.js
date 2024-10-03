import React, { useState } from 'react'
import Header from "./Header"

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleFormMethod = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg")] min-h-screen min-w-screen relative'>
      <div className='bg-black/50 min-h-screen h-full w-full flex items-center justify-center'>
        <Header />
        <form className='p-14 bg-black/70 text-white flex flex-col items-start justify-center gap-4 w-[min(90%,450px)]'>
          <h1 className='text-4xl font-extrabold mb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {
            !isSignIn && <>
            <input type='text' className='w-full bg-black/50 text-white p-4 border border-gray-600 rounded-[4px] outline-none' placeholder='Full Name'/> 
            <input type='number' className='w-full bg-black/50 text-white p-4 border border-gray-600 rounded-[4px] outline-none' placeholder='Phone'/> 
            </>
          }
          <input type="text" className='w-full bg-black/50 text-white p-4 border border-gray-600 rounded-[4px] outline-none' placeholder='Email or Phone'/>
          <input type="password" className='w-full bg-black/50 text-white p-4 border border-gray-600 rounded-[4px] outline-none' placeholder='Password'/>
          <button className='bg-[rgb(229,9,20)] hover:bg-[#c11119] w-full py-2.5 font-semibold rounded-[4px] duration-100 ease-linear'>{isSignIn ? "Sign In" : "Sign Up"}</button>
          <div className='text-white/80 mt-5'>{isSignIn ? "New to Netflix? " : "Already a Member? "}<button className='text-white font-semibold cursor-pointer hover:underline' onClick={(e) => {
            e.preventDefault();
            toggleFormMethod();
          }}>{isSignIn ? "Sign up now" : "Sign in now"}</button></div>
        </form>
      </div>
    </div>
  )
}

export default Login