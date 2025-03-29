import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { UserAuthProvider, useUserAuth } from './UserAuth';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;
const UserProfile = ({ id }) => <h2>User Profile for ID: {id}</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

const Navigation = () => {
  const { isLoggedIn, toggleAuth } = useUserAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {isLoggedIn ? (
        <>
          <Link to="/profile/1">Profile</Link>
          <button onClick={toggleAuth}>Logout</button>
        </>
      ) : (
        <button onClick={toggleAuth}>Login</button>
      )}
    </nav>
  );
};

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useUserAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
};

const App = () => (
  <UserAuthProvider>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <UserProfile id={1} /> {/* Example static ID */}
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </UserAuthProvider>
);

export default App;