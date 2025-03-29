import React, { createContext, useContext, useState } from 'react';

const UserAuth = createContext(null);

export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <UserAuth.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </UserAuth.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserAuth);
};