import { useUser } from 'contexts/user-context'
import React from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

const RestrictAuth = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const tokenVal = localStorage.getItem('token');

  return (
    tokenVal ?
      <Navigate to="/" state={{from : location }} replace />
      :
      <Outlet />


  )
}

export default RestrictAuth