import { useUser } from 'contexts/user-context';
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = () => {


  const location = useLocation();
  const navigate = useNavigate();
  const isAllowed = localStorage.getItem("token")

  return isAllowed ?
    <Outlet />
    :
    <Navigate to="/login" state={{ from: location }} replace />


}

export default RequireAuth