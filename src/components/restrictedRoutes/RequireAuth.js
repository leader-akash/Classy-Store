import { useUser } from 'contexts/user-context';
import React from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = () => {

    const {getToken} = useUser();
    const location = useLocation();
    const navigate = useNavigate();

  return getToken ? 
    <Outlet />
    : 
    <Navigate to="/login" state={{from: location}} replace/>


}

export default RequireAuth