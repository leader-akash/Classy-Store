import { useUser } from 'contexts/user-context'
import React from 'react'
import {Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

const RestrictAuth = () => {

    const {getToken} = useUser();
    const location = useLocation();
    const navigate =useNavigate();

  return (
       getToken ? 
            // <Navigate to="/" state={{from : location }} replace />
      navigate( -1 || "/", {replace: true})

        :
        <Outlet />

    
  )
}

export default RestrictAuth