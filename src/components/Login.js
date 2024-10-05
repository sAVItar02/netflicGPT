import React, { useState } from 'react'
import Header from "./Header"
import { validateEmail, validatePassword, validatePhone, validateSignIn, validateSignUp, validateUsername } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorBorder, setErrorBorder] = useState({
    email: false,
    password: false,
    username: false,
    phone: false
  })

  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const toggleFormMethod = () => {
    setIsSignIn(!isSignIn);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(isSignIn && validateSignIn(email, password)) {
      setErrorMessage(validateEmail(email, password));
      return;
    }
    if(!isSignIn && validateSignUp(email, password, phone, username)) {
      setErrorMessage(validateSignUp(email, password, phone, username));
      return;
    }

    setErrorMessage("");

    if(!isSignIn) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username, phoneNumber: phone
        }).then(() => {
          const { uid, email, displayName, phoneNumber } = auth.currentUser;
          dispatch(addUser({uid, email, displayName, phoneNumber}));
          console.log("navigating to browse 2")
          navigate("/browse");
        }).catch((error) => {
          const errorCode = error?.code;
          const errorMessage = error?.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  }

  return (
    <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg")] min-h-screen min-w-screen relative'>
      <div className='bg-black/50 min-h-screen h-full w-full flex items-center justify-center'>
        <Header />
        <form onSubmit={(e) => handleFormSubmit(e)} className='p-14 bg-black/70 text-white flex flex-col items-start justify-center gap-4 w-[min(90%,450px)]'>
          <h1 className='text-4xl font-extrabold mb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {
            !isSignIn && <>
            <input value={username} onChange={(e) => {
              setUsername(e.target.value);
              validateUsername(e.target.value) ? setErrorBorder(prev => ({...prev, username: false})):  setErrorBorder(prev => ({...prev, username: true})); 
            }} type='text' className={`w-full bg-black/50 text-white p-4 border rounded-[4px] outline-none ${errorBorder.username ? "border-red-500" : "border-gray-600"}`} placeholder='Full Name'/> 
            {errorBorder.username && <p className='text-red-500 font-semibold text-sm'>Username must be between 5 and 20 characters long</p>}

            <input value={phone} onChange={(e) => {
              setPhone(e.target.value);
              validatePhone(e.target.value) ? setErrorBorder(prev => ({...prev, phone: false})):  setErrorBorder(prev => ({...prev, phone: true})); 
            }} type='number' className={`w-full bg-black/50 text-white p-4 border rounded-[4px] outline-none ${errorBorder.phone ? "border-red-500" : "border-gray-600"}`} placeholder='Phone'/> 
            {errorBorder.phone && <p className='text-red-500 font-semibold text-sm'>Phone must be 10 digits long containing only numbers</p>}
            </>
          }
          <input value={email} onChange={(e) => {
              setEmail(e.target.value);
              console.log(validateEmail(e.target.value))
              validateEmail(e.target.value) ? setErrorBorder(prev => ({...prev, email: false})):  setErrorBorder(prev => ({...prev, email: true})); 
            }} type="text" className={`w-full bg-black/50 text-white p-4 border rounded-[4px] outline-none ${errorBorder.email ? "border-red-500" : "border-gray-600"}`} placeholder='Email or Phone'/>

            {errorBorder.email && <p className='text-red-500 font-semibold text-sm'>Please enter a valid email</p>}

          <input value={password} onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value) ? setErrorBorder(prev => ({...prev, password: false})):  setErrorBorder(prev => ({...prev, password: true})); 
            }} type="password" className={`w-full bg-black/50 text-white p-4 border rounded-[4px] outline-none ${errorBorder.password ? "border-red-500" : "border-gray-600"}`} placeholder='Password'/>

            {errorBorder.password && <p className='text-red-500 font-semibold text-sm'>Passoword must contain one special character, one number and be between 8 - 20 characters long</p>}
          
          {errorMessage && <p className='text-red-500 font-semibold text-sm'>{errorMessage}</p>}

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