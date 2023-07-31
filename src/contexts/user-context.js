import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext(null);

const UserProvider = ({children}) => {

  const [getToken, setGetToken] = useState("");

  useEffect(()=>{
    setGetToken(localStorage.getItem("token"));
  }, [])

  const [isLoggedIn, setIsLoggedIn] = useState(getToken ? true : false);


  return (
    <UserContext.Provider value={{getToken, isLoggedIn, setIsLoggedIn, setGetToken }}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext);

export {UserProvider, useUser};