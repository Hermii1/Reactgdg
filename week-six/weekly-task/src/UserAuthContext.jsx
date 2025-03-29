import React, { createContext, useContext, useState } from 'react';

// Create the UserAuthContext
const UserAuthContext = createContext();

// Create a provider component
export const UserAuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleAuth = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    return (
        <UserAuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
            {children}
        </UserAuthContext.Provider>
    );
};

// Custom hook to use the UserAuthContext
export const useUserAuth = () => {
    return useContext(UserAuthContext);
};