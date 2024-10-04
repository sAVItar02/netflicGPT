import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, phoneNumber } = user;
        dispatch(addUser({uid, email, displayName, phoneNumber}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Body