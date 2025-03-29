import React from 'react';
import { useUserAuth } from './UserAuthContext'; // Adjust the import path based on your file structure

function Login ()  {
  const { isLoggedIn, toggleAuth } = useUserAuth();

  return (
    <div>
      <h2>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h2>
      <button onClick={toggleAuth}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <p>{isLoggedIn ? 'You are logged in.' : 'You are logged out.'}</p>
    </div>
  );
};

export default Login;