import React from 'react';
import { useUserAuth } from './UserAuthContext';

const UserAuthButton = () => {
    const { isLoggedIn, toggleAuth } = useUserAuth();

    return (
        <div>
            <button onClick={toggleAuth}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <p>{isLoggedIn ? 'You are logged in.' : 'You are logged out.'}</p>
        </div>
    );
};

export default UserAuthButton;