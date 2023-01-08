import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectRoute = ({children}) => {
  const { isLoggedIn } = useSelector(store => store.users);

  if(isLoggedIn === false) {
    return <Navigate to="/login" />
  };

  return children;
}