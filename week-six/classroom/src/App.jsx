// App.js
import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import './index.css'
const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

const ThemedApp = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body
  }, [theme]);

  return (
    <div>
      <h1>Your Application</h1>
      <ThemeToggleButton />
      {/* Other components */}
    </div>
  );
};

export default App;
/*import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton'; // Import the button component

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Your Application</h1>
        <ThemeToggleButton />
        
      </div>
    </ThemeProvider>
  );
};

export default App;*/