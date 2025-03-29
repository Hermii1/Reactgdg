import React from 'react';
import { UserAuthProvider } from './UserAuthContext'; // Adjust the import based on the actual file name
import Login from './Login.jsx'; 

function App() {
  return (
    <UserAuthProvider>
      <Login />
    </UserAuthProvider>
  );
}

export default App;